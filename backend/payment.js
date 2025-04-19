const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PAYMENT_PORT || 5001; // Custom port to avoid conflict

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use('/webhook', express.raw({ type: 'application/json' }));

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

// Nodemailer setup
const sendConfirmationEmail = (userEmail, fullName, course) => {
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
    text: `Dear ${fullName},\n\nThank you for enrolling in ${course}.\nYour payment has been received successfully.\n\n- Cloudsentrics Team`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Error sending email:', error);
    } else {
      console.log('✅ Email sent:', info.response);
    }
  });
};

// Create Stripe Payment Intent
app.post('/create-payment-intent', async (req, res) => {
  const { amount, email, fullName, phone, country, course, paymentMethod } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
      receipt_email: email,
      metadata: {
        full_name: fullName,
        phone,
        country,
        course,
        payment_method: paymentMethod,
      },
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('❌ Stripe error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Stripe webhook
app.post('/webhook', async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('❌ Webhook signature verification failed:', err.message);
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
    } = paymentIntent.metadata;

    const sql = `
      INSERT INTO students (
        full_name, email, phone, country, course, payment_method
      ) VALUES (?, ?, ?, ?, ?, ?)
    `;

    const values = [full_name, studentEmail, phone, country, course, payment_method];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('❌ Error saving to database:', err);
        return res.status(500).json({ error: 'Database error' });
      }

      console.log('✅ Student registered:', result);
      sendConfirmationEmail(studentEmail, full_name, course);
      res.status(200).send({ message: 'Payment received and student saved' });
    });
  } else {
    res.status(200).send('Webhook received');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Payment server running at http://localhost:${PORT}`);
});
