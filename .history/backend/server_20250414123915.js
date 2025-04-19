// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

dotenv.config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(express.raw({ type: 'application/json' })); // Required for webhook

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'cloudsentrics',
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err);
    return;
  }
  console.log('✅ Connected to MySQL database');
});

// Generate 6-digit token
const generateToken = () => Math.floor(100000 + Math.random() * 900000).toString();

// Send confirmation email
const sendPaymentEmail = (userEmail, paymentToken) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: 'Payment Confirmation',
    text: `🎉 Thank you for your payment. Your registration token is: ${paymentToken}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Email error:', error);
    } else {
      console.log('✅ Email sent:', info.response);
    }
  });
};

// Create Stripe payment intent
app.post('/create-payment-intent', async (req, res) => {
  const {
    amount,
    full_name,
    email,
    phone,
    country,
    course,
    payment_method,
  } = req.body;

  const registration_token = generateToken(); // Generate 6-digit token

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
      receipt_email: email,
      metadata: {
        full_name,
        phone,
        country,
        course,
        payment_method,
        registration_token,
        registration_paid: 'true',
        course_paid: 'true',
      },
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('❌ Stripe error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Webhook to confirm payment and insert into DB
app.post('/webhook', async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('❌ Webhook error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    const metadata = paymentIntent.metadata;

    const sql = `
      INSERT INTO students (
        full_name, email, phone, country, course,
        payment_method, registration_token,
        registration_paid, course_paid
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      metadata.full_name,
      paymentIntent.receipt_email,
      metadata.phone,
      metadata.country,
      metadata.course,
      metadata.payment_method,
      metadata.registration_token,
      metadata.registration_paid === 'true',
      metadata.course_paid === 'true',
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('❌ DB insert error:', err);
      } else {
        console.log('✅ Student registered:', result);
        sendPaymentEmail(paymentIntent.receipt_email, metadata.registration_token);
      }
    });
  }

  res.status(200).send('✅ Webhook received');
});

// Health check
app.get('/', (req, res) => {
  res.send('✅ Backend is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
