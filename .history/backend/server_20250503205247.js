const dotenv = require('dotenv');
dotenv.config(); // Load .env variables early

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
const allowedOrigins = ['https://cloudsentrics.org', 'https://www.cloudsentrics.org'];
//const allowedOrigins = ['http://localhost:5173'];

app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('✅ Backend server is running');
});

// Create PaymentIntent
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

        // ✅ Basic validations
        if (!amount || !email || !fullName) {
            return res.status(400).json({
                error: 'Missing required fields. Please provide amount, email, and full name.'
            });
        }

        const parsedAmount = parseInt(amount, 10);
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            return res.status(400).json({
                error: 'Invalid payment amount. Please enter a valid amount in cents.'
            });
        }

        // ✅ Create PaymentIntent
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
            },
        });

        console.log('✅ PaymentIntent created:', paymentIntent.id);

        res.send({
            clientSecret: paymentIntent.client_secret,
            message: 'Payment intent created successfully.',
        });

    } catch (error) {
        console.error('❌ Stripe error:', error);

        // Stripe-specific errors
        if (error.type === 'StripeCardError') {
            let message = 'Your card was declined.';

            if (error.decline_code === 'insufficient_funds') {
                message = 'Transaction declined: Insufficient funds on your card.';
            } else if (error.decline_code === 'expired_card') {
                message = 'Transaction declined: Your card has expired.';
            } else if (error.decline_code === 'incorrect_cvc') {
                message = 'Transaction declined: Incorrect CVC code.';
            } else if (error.decline_code === 'incorrect_number') {
                message = 'Transaction declined: Incorrect card number.';
            }

            return res.status(400).json({ error: message });
        }

        if (error.type === 'StripeInvalidRequestError') {
            return res.status(400).json({
                error: 'Invalid parameters sent to Stripe. Please check your data.'
            });
        }

        if (error.type === 'StripeAPIError') {
            return res.status(500).json({
                error: 'Stripe internal error. Please try again later.'
            });
        }

        return res.status(500).json({
            error: 'An unexpected error occurred. Please try again later.'
        });
    }
});

// Modular routes
const courseRoute = require('./api/course');
app.use('/api/course', courseRoute);

const enrollRoute = require('./api/enroll');
app.use('/api/enroll', enrollRoute);

const paymentRoutes = require('./api/paymentRoutes');
app.use('/api', paymentRoutes);

// Removed JWT token verification middleware

const contactRoute = require('./api/contactRoute');
app.use('/api', contactRoute());

const joinRoute = require('./api/joinRoute');
app.use('/api', joinRoute);

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
