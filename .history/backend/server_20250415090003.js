const dotenv = require('dotenv');
dotenv.config(); // Load .env variables early

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' })); // Use .env variable for origin
app.use(express.json()); // For parsing application/json

// MySQL connection setup
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'cloudsentrics',
});

// Check MySQL connection
db.connect((err) => {
    if (err) {
        console.error('❌ MySQL connection failed:', err);
        process.exit(1); // Exit if the DB connection fails
    }
    console.log('✅ Connected to MySQL database');
});

// Home route
app.get('/', (req, res) => {
    res.send('✅ Backend server is running');
});

// Generate 6-digit token
const generateToken = () => Math.floor(100000 + Math.random() * 900000).toString();

// Payment + Email + DB route
app.post('/create-payment-intent', async (req, res) => {
    const { amount, email, fullName, phone, country, course, paymentMethod } = req.body;
    const registrationToken = generateToken();
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' '); // MySQL DATETIME format

    try {
        // 1. Create Payment Intent with Stripe
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

        // 2. Insert into DB immediately
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
                return res.status(500).json({ error: 'Failed to save student info', details: err });
            }

            console.log('✅ Student info saved to DB');

            // 3. Send email (non-blocking)
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
                text: `Thank you for your payment. Your registration token is: ${registrationToken}`,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.warn('⚠️ Email failed to send:', error);
                    return; // Optionally log or handle email sending errors
                }
                console.log('✅ Email sent:', info.response);
            });

            // Final success response
            res.send({
                clientSecret: paymentIntent.client_secret,
                message: 'Payment successful, student info saved, and email sent.',
            });
        });

    } catch (error) {
        console.error('❌ Stripe Error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Enroll route (modular)
const enrollRoute = require('./api/enroll')(db, generateToken);
app.use('/api/enroll', enrollRoute);

// Token verification (optional/testing)
const verifyTokenRoute = require('./routes/verifyToken'); // path to the file
app.use('/verifytoken', verifyTokenRoute(db));


// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
