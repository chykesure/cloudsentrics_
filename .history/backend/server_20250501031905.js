const dotenv = require('dotenv');
dotenv.config(); // Load .env variables early

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors({ origin: process.env.CORS_ORIGIN || 'https' }));
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('✅ Backend server is running');
});

// Generate 6-digit token (optional if still needed)
const generateToken = () => Math.floor(100000 + Math.random() * 900000).toString();

// Payment Intent Route (without email)
app.post('/create-payment-intent', async (req, res) => {
    try {
        const {
            amount,
            email,
            fullName,
            phone,
            country,
            course,
            paymentMethod,
        } = req.body;

        if (!amount || !email || !fullName) {
            return res.status(400).json({ error: 'Missing required fields.' });
        }

        const parsedAmount = parseInt(amount, 10);
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            return res.status(400).json({ error: 'Invalid payment amount.' });
        }

        // Generate JWT token (for metadata or future use)
        const registrationToken = jwt.sign(
            { email, fullName, course, createdAt: new Date().toISOString() },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '15m' }
        );

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

        res.send({
            clientSecret: paymentIntent.client_secret,
            message: 'Payment successful.',
        });
    } catch (error) {
        console.error('❌ Error in payment intent:', error);
        res.status(500).json({ error: error.message });
    }
});


// Modular routes
const enrollRoute = require('./api/enroll');
app.use('/api/enroll', enrollRoute);

const paymentRoutes = require('./api/paymentRoutes');
app.use('/api', paymentRoutes);

const verifyToken = require('./api/verifytoken');
app.post('/api/verifytoken', verifyToken, (req, res) => {
    res.json({ valid: true, user: req.user });
});

const contactRoute = require('./api/contactRoute');
app.use('/api', contactRoute());

const joinRoute = require('./api/joinRoute');
app.use('/api', joinRoute); // Correct usage


const careerRoute = require('./api/careerRoute');
app.use('/api', careerRoute);

const enquiryRoute = require('./api/enquiryRoute');
app.use('/api', enquiryRoute);

const getintouchRoute = require('./api/getintouchRoute');
app.use('/api', getintouchRoute);

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
