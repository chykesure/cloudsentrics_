const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
dotenv.config();

// Initialize Stripe with your secret key
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors({ origin: 'http://localhost:5173' }));  // Adjust frontend URL if needed
app.use(express.json());  // Parse JSON bodies

// MySQL connection setup
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost', // MySQL host (XAMPP usually runs on localhost)
  user: process.env.DB_USER || 'root',     // MySQL username (default is 'root')
  password: process.env.DB_PASSWORD || '', // Password for MySQL (empty for XAMPP's default)
  database: process.env.DB_NAME || 'cloudsentrics',  // Your database name
});

// MySQL connection check
db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err);
    return;
  }
  console.log('✅ Connected to MySQL database');
});

// Home route to check if the backend is running
app.get('/', (req, res) => {
  res.send('✅ Backend server is running');
});

// Function to send email with the payment token to the user
const sendPaymentEmail = (userEmail, paymentToken) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',  // You can use another email service provider
    auth: {
      user: process.env.EMAIL_USER,  // Your email address (e.g., 'example@gmail.com')
      pass: process.env.EMAIL_PASS,  // Your email password or app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,  // Sender's email
    to: userEmail,  // Recipient's email (provided by the user)
    subject: 'Payment Confirmation and Token',
    text: `Thank you for your payment. Here is your payment token: ${paymentToken}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Error sending email:', error);
    } else {
      console.log('✅ Email sent: ' + info.response);
    }
  });
};

// Route to create a Stripe payment intent
app.post('/create-payment-intent', async (req, res) => {
  const { amount, email } = req.body;  // Email from the frontend (the user making the payment)

  try {
    // Create payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    // Send the payment token to the user's email
    sendPaymentEmail(email, paymentIntent.client_secret);  // Send the token to the user's email

    res.send({
      clientSecret: paymentIntent.client_secret,  // Send the client secret for the frontend to complete the payment
    });
  } catch (error) {
    console.error('Stripe Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
