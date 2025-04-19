// Load environment variables early
const dotenv = require('dotenv');
dotenv.config();

// Import necessary packages
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'cloudsentrics',
});

// MySQL connection error handling
db.connect((err) => {
    if (err) {
        console.error('❌ MySQL connection failed:', err);
        process.exit(1);
    }
    console.log('✅ Connected to MySQL database');
});

// Utility: Generate 6-digit token
const generateToken = () => Math.floor(100000 + Math.random() * 900000).toString();

// Utility: Validate required fields
const isEmpty = (value) => !value || value.trim() === '';

// Home route
app.get('/', (req, res) => {
    res.send('✅ Backend server is running');
});

// Payment, Email, and DB insertion
app.post('/create-payment-intent', async (req, res) => {
    const { amount, email, fullName, phone, country, course, paymentMethod } = req.body;

    if ([email, fullName, phone, country, course, paymentMethod].some(isEmpty)) {
        return res.status(400).json({ error: 'All fields must be filled in properly (no empty values)' });
    }

    const registrationToken = generateToken();
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');

    try {
        // Stripe payment intent creation
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

        const sql = `
            INSERT INTO students (
                full_name, email, phone, country, course,
                payment_method, registration_token, created_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [fullName, email, phone, country, course, paymentMethod, registrationToken, createdAt];

        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('❌ Error inserting into DB:', err);
                return res.status(500).json({ error: 'Failed to save student info', details: err.message });
            }

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'Payment Confirmation & Registration Token',
                text: `Thank you for your payment.\n\nYour registration token is: ${registrationToken}`,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.warn('⚠️ Email failed to send:', error);
                    return res.status(500).json({ error: 'Email sending failed' });
                }
                console.log('✅ Email sent:', info.response);
            });

            res.send({
                clientSecret: paymentIntent.client_secret,
                message: 'Payment successful, student info saved, and email sent.',
            });
        });

    } catch (error) {
        console.error('❌ Stripe Error:', error);
        res.status(500).json({ error: 'Stripe payment processing failed', details: error.message });
    }
});


// Optional: Enroll & verify routes
const enrollRoute = require('./api/enroll')(db, generateToken);
app.use('/api/enroll', enrollRoute);

const verifyTokenRoute = require('./api/verifytoken')(db);
app.use('/api', verifyTokenRoute);

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
