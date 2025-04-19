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

// Verify Token
app.post('/verify-token', (req, res) => {
    const { token, email } = req.body;

    if (!token || !email) {
        return res.status(400).json({ error: 'Token and email are required' });
    }

    // 🔐 TEMP: Replace these with your test credentials
    const TEST_EMAIL = 'chike@gmail.com';
    const TEST_TOKEN = '123456';

    if (email === TEST_EMAIL && token === TEST_TOKEN) {
        return res.status(200).json({ valid: true });
    } else {
        return res.status(200).json({ valid: false });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
