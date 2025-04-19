const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const stripe = require('stripe')('sk_test_your_secret_key'); // Replace with your Stripe key
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cloudsentrics'
});

db.connect(err => {
    if (err) throw err;
    console.log('✅ Connected to MySQL database');
});

// Utility: Validate empty fields
const isEmpty = (value) =>
    value === undefined || value === null || value.toString().trim() === '';

// Generate 6-digit registration token
const generateToken = () => Math.floor(100000 + Math.random() * 900000);

// Stripe payment intent + student registration route
app.post('/create-payment-intent', async (req, res) => {
    const { amount, email, fullName, phone, country, course, paymentMethod } = req.body;

    if ([email, fullName, phone, country, course, paymentMethod].some(isEmpty)) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    if (!amount || isNaN(amount) || amount <= 0) {
        return res.status(400).json({ error: 'Invalid payment amount.' });
    }

    try {
        // Check for existing registration FIRST
        db.query(
            'SELECT * FROM students WHERE email = ? AND course = ?',
            [email, course],
            async (err, results) => {
                if (err) {
                    console.error('Database error:', err);
                    return res.status(500).json({ error: 'Database error' });
                }

                if (results.length > 0) {
                    return res.status(409).json({ error: 'You have already registered for this course.' });
                }

                // Then create payment intent
                const paymentIntent = await stripe.paymentIntents.create({
                    amount: parseInt(amount),
                    currency: 'usd',
                    metadata: { integration_check: 'accept_a_payment' },
                });

                const registration_token = generateToken();
                const insertSql = `
                    INSERT INTO students (full_name, email, phone, country, course, payment_method, registration_token, created_at)
                    VALUES (?, ?, ?, ?, ?, ?, ?, NOW())
                `;

                db.query(
                    insertSql,
                    [fullName, email, phone, country, course, paymentMethod, registration_token],
                    (insertErr) => {
                        if (insertErr) {
                            if (insertErr.code === 'ER_DUP_ENTRY') {
                                return res.status(409).json({ error: 'Duplicate registration detected.' });
                            }
                            return res.status(500).json({ error: 'Failed to save student info' });
                        }

                        return res.status(200).json({
                            clientSecret: paymentIntent.client_secret,
                            registration_token,
                            message: 'Payment intent created and student registered successfully.'
                        });
                    }
                );
            }
        );
    } catch (err) {
        console.error('Stripe error:', err);
        return res.status(500).json({ error: 'Payment intent creation failed' });
    }
});



const verifyTokenRoute = require('./api/verifytoken')(db);
app.use('/api', verifyTokenRoute);

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
