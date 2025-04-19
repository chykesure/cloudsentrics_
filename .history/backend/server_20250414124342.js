const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Stripe webhook raw parser BEFORE express.json
app.post('/webhook', express.raw({ type: 'application/json' }));

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

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

// Generate random 6-digit token
const generateToken = () => Math.floor(100000 + Math.random() * 900000).toString();

// Send payment token email
const sendPaymentEmail = (userEmail, token) => {
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
    subject: 'Payment Confirmation and Your Token',
    text: `Thank you for your payment. Your registration token is: ${token}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Email error:', error);
    } else {
      console.log('✅ Email sent:', info.response);
    }
  });
};

// Create payment intent
app.post('/create-payment-intent', async (req, res) => {
  const {
    amount,
    email,
    full_name,
    phone,
    country,
    course,
    payment_method,
  } = req.body;

  const registration_token = generateToken();

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
        registration_paid: true,
        course_paid: true,
      },
    });

    // Send 6-digit token to user
    sendPaymentEmail(email, registration_token);

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('❌ Stripe error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Stripe Webhook
app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.log('❌ Webhook signature verification failed:', err);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    const studentEmail = paymentIntent.receipt_email;

    const {
      full_name,
      phone,
      country,
      course,
      payment_method,
      registration_token,
      registration_paid,
      course_paid,
    } = paymentIntent.metadata;

    const sql = `
      INSERT INTO students (
        full_name, email, phone, country, course,
        payment_method, registration_token,
        registration_paid, course_paid
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      full_name,
      studentEmail,
      phone,
      country,
      course,
      payment_method,
      registration_token,
      registration_paid || false,
      course_paid || false,
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('❌ Database insert error:', err);
        return res.status(500).send();
      }

      console.log('✅ Student saved to DB:', result);
      res.status(200).send();
    });
  } else {
    res.status(200).send(); // Other events
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
