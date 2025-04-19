const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your actual frontend URL
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Stripe server is live ✅");
});

app.post('/create-payment-intent', async (req, res) => {
  console.log("Received request to create payment intent");
  const { amount } = req.body;
  console.log("Amount received:", amount);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    console.log("PaymentIntent created:", paymentIntent.id);
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
