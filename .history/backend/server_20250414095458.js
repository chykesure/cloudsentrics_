const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // Adjust frontend URL if needed
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

// Home route
app.get('/', (req, res) => {
  res.send('✅ Backend server is running');
});

// Stripe payment intent route
app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Stripe Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Register student route
app.post('/register', (req, res) => {
  const {
    full_name,
    email,
    phone,
    country,
    course,
    payment_method,
    registration_token,
    registration_paid,
    course_paid,
  } = req.body;

  const sql = `
    INSERT INTO students (
      full_name, email, phone, country, course,
      payment_method, registration_token,
      registration_paid, course_paid
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    full_name,
    email,
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
      console.error('❌ Error inserting into database:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.status(200).json({ message: '✅ Registration successful', studentId: result.insertId });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
