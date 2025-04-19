const dotenv = require('dotenv');
dotenv.config(); // 👈 Make sure this is before using process.env

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors({ origin: 'http://localhost:5173' })); // Adjust frontend URL if needed
app.use(express.json()); // For parsing application/json

// Raw body parser for Stripe webhook
app.use('/webhook', express.raw({ type: 'application/json' }));

// MySQL connection setup
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

// Home route
app.get('/', (req, res) => {
  res.send('✅ Backend server is running');
});

// Generate 6-digit token
const generateToken = () => Math.floor(100000 + Math.random() * 900000).toString();

// Send email with token
const sendPaymentEmail = (userEmail, registrationToken) => {
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
    subject: 'Payment Confirmation & Registration Token',
    text: `Thank you for your payment. Your registration token is: ${registrationToken}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Error sending email:', error);
    } else {
      console.log('✅ Email sent: ' + info.response);
    }
  });
};

// Create Stripe Payment Intent
app.post('/create-payment-intent', async (req, res) => {
  const { amount, email, fullName, phone, country, course, paymentMethod } = req.body;
  const registrationToken = generateToken();

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
        registration_token: registrationToken,
      },
    });

    // Send email with token
    sendPaymentEmail(email, registrationToken);

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('❌ Stripe Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Stripe Webhook for payment success
app.post('/webhook', async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.log('❌ Webhook signature verification failed:', err.message);
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
    } = paymentIntent.metadata;

    const sql = `
      INSERT INTO students (
        full_name, email, phone, country, course,
        payment_method, registration_token
      )
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      full_name,
      studentEmail,
      phone,
      country,
      course,
      payment_method,
      registration_token,
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('❌ Error inserting into database:', err);
        return res.status(500).json({ error: 'Database error' });
      }

      console.log('✅ Student registered:', result);
      res.status(200).send({ message: 'Student registered successfully after payment.' });
    });
  } else {
    res.status(200).send('Event received');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});


// Token verification route
app.post('/verify-token', (req, res) => {
    const { email, token } = req.body;
  
    
  });
  