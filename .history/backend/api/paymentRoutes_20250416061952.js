// paymentRoutes.js
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'your_database_name'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('✅ MySQL connected (from paymentRoutes).');
    }
});

// Create PaymentIntent
router.post('/create-payment-intent', async (req, res) => {
    const { amount, email } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
            receipt_email: email,
            description: 'Course Enrollment Payment'
        });

        res.send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error('Stripe Error:', error);
        res.status(500).send({ error: 'Failed to create payment intent' });
    }
});

// Save Enrollment
router.post('/save-enrollment', (req, res) => {
    const {
        fullName, email, phone, country, course,
        paymentMethod, amount, paymentIntentId, paymentStatus
    } = req.body;

    const sql = `INSERT INTO enrollments 
    (full_name, email, phone, country, course, payment_method, amount, payment_intent_id, payment_status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [
        fullName,
        email,
        phone,
        country,
        course || 'N/A',
        paymentMethod,
        amount,
        paymentIntentId,
        paymentStatus
    ], (err, result) => {
        if (err) {
            console.error('DB Insert Error:', err);
            return res.status(500).json({ error: 'Database insert failed' });
        }
        res.json({ message: '✅ Enrollment saved successfully.' });
    });
});

module.exports = router;
