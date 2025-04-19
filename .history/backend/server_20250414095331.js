// server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const crypto = require('crypto');
const db = require('./db'); // MySQL connection file

dotenv.config();

const app = express();
app.use(cors({ origin: 'http://localhost:5173' })); // Replace with your frontend URL
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.send("Stripe server and MySQL are live ✅");
});

// /register route
app.post('/register', async (req, res) => {
  const {
    fullName,
    email,
    phone,
    country,
    course,
    paymentMethod
  } = req.body;

  const token = crypto.randomBytes(8).toString('hex'); // Generate a registration token

  try {
    // Insert into the database
    db.query(
      `INSERT INTO students (full_name, email, phone, country, course, payment_method, registration_token)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [fullName, email, phone, country, course, paymentMethod, token],
      async (err, result) => {
        if (err) {
          console.error("❌ MySQL Error:", err.message);
          return res.status(500).json({ error: "Database insertion failed" });
        }

        // Create Stripe PaymentIntent
        const paymentIntent = await stripe.paymentIntents.create({
          amount: 15000, // $150 in cents
          currency: 'usd',
          payment_method_types: ['card'],
        });

        res.send({
          clientSecret: paymentIntent.client_secret,
          token,
          studentId: result.insertId
        });
      }
    );
  } catch (error) {
    console.error("❌ Registration Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
