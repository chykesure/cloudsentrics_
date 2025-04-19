const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2');
dotenv.config();

// Initialize Stripe with your secret key
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors({ origin: 'http://localhost:5173' }));  // Adjust frontend URL if needed
app.use(express.json());  // Parse JSON bodies

// MySQL connection setup
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost', // MySQL host (XAMPP usually runs on localhost)
  user: process.env.DB_USER || 'root',     // MySQL username (default is 'root')
  password: process.env.DB_PASSWORD || '', // Password for MySQL (empty for XAMPP's default)
  database: process.env.DB_NAME || 'cloudsentrics',  // Your database name
});

// MySQL connection check
db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err);
    return;
  }
  console.log('✅ Connected to MySQL database');
});

// Home route to check if the backend is running
app.get('/', (req, res) => {
  res.send('✅ Backend server is running');
});

// Route to create a Stripe payment intent
app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.send({
      clientSecret: paymentIntent.client_secret,  // Send the client secret for the frontend to complete the payment
    });
  } catch (error) {
    console.error('Stripe Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Route to register a student (insert into the database)
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
    registration_paid || false,  // Default to false if not provided
    course_paid || false,  // Default to false if not provided
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

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
