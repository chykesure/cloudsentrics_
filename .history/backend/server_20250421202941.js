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
    try {
        const {
            amount,
            email,
            fullName,
            phone,
            country,
            course,
            paymentMethod, // Optional, if frontend is handling it
            stripePaymentMethodId, // Optional from frontend
        } = req.body;

        if (!amount || !email || !fullName) {
            return res.status(400).json({ error: 'Missing required fields.' });
        }

        const parsedAmount = parseInt(amount, 10);
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            return res.status(400).json({ error: 'Invalid payment amount.' });
        }

        const registrationToken = generateToken();
        const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');

        // 1. Create PaymentIntent with optional payment_method
        const paymentIntent = await stripe.paymentIntents.create({
            amount: parsedAmount,
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

        console.log('✅ PaymentIntent created:', paymentIntent.id);

        // 2. Insert into database
        const sql = `
            INSERT INTO students (
                full_name, email, phone, country, course,
                payment_method, registration_token, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [fullName, email, phone, country, course, paymentMethod, registrationToken, createdAt];

        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('❌ Error inserting into DB:', err);
                return res.status(500).json({ error: 'Failed to save student info' });
            }

            console.log('✅ Student info saved to DB');

            // 3. Send confirmation email
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
                } else {
                    console.log('✅ Email sent:', info.response);
                }
            });

            // 4. Respond with client secret
            res.send({
                clientSecret: paymentIntent.client_secret,
                message: 'Payment successful, student info saved, and email sent.',
            });
        });
    } catch (error) {
        console.error('❌ Error in payment intent:', error);
        res.status(500).json({ error: error.message });
    }
});


// Enroll route (modular)
const enrollRoute = require('./api/enroll')(db, generateToken);
app.use('/api/enroll', enrollRoute);

// Token verification (optional/testing)
const verifyTokenRoute = require('./api/verifytoken');
app.use('/api', verifyTokenRoute(db));

// ✅ Import the payment routes
const paymentRoutes = require('./api/paymentRoutes');
// Inject db into each request in the router
app.use('/api', (req, res, next) => {
    req.db = db; // attach db to the request
    next();
}, paymentRoutes);

// Contact form route
const contactRoute = require('./api/contactRoute');
app.use('/api', contactRoute());

// Career form route
const careerRoute = require('./api/careerRoute'); // adjust path accordingly
app.use('/api', careerRoute);

const careerRoute = require('./api/careerRoute'); // adjust path accordingly
app.use('/api', careerRoute);


// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
