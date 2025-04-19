const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Accessing STRIPE_SECRET_KEY from the .env file

// Create PaymentIntent
router.post('/create-payment-intent', async (req, res) => {
    const { amount, email, course } = req.body;

    try {
        // Validate the required parameters
        if (!amount || !email) {
            return res.status(400).json({ error: 'Amount and email are required.' });
        }

        // Ensure the amount is a valid number
        const parsedAmount = parseInt(amount, 10);
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            return res.status(400).json({ error: 'Invalid amount provided.' });
        }

        // Create a PaymentIntent on Stripe
        const paymentIntent = await stripe.paymentIntents.create({
            amount: parsedAmount,
            currency: 'usd',
            receipt_email: email,
            description: `Course Enrollment Payment: ${course || 'N/A'}`, // Include course name in the description
        });

        // Send the client secret back to the frontend to complete the payment
        res.send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error('❌ Stripe Error:', error.message);
        res.status(500).json({ error: 'Failed to create payment intent.' });
    }
});

// Save Enrollment
router.post('/save-enrollment', (req, res) => {
    const {
        fullName, email, phone, country, course,
        paymentMethod, amount, paymentIntentId, paymentStatus
    } = req.body;

    if (!req.db) {
        return res.status(500).json({ error: 'Database connection not available.' });
    }

    const sql = `
        INSERT INTO enrollments (
            full_name, email, phone, country, course,
            payment_method, amount, payment_intent_id, payment_status
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        fullName,
        email,
        phone,
        country,
        course || 'N/A',
        paymentMethod,
        amount,
        paymentIntentId,
        paymentStatus
    ];

    req.db.query(sql, values, (err, result) => {
        if (err) {
            console.error('❌ DB Insert Error:', err.message);
            return res.status(500).json({ error: 'Database insert failed.' });
        }
        res.json({ message: '✅ Enrollment saved successfully.' });
    });
});

module.exports = router;
