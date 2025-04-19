const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Stripe integration

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors({ origin: 'http://localhost:5173' }));  // Adjust frontend URL if needed
app.use(express.json());  // Parse JSON bodies

// MySQL connection setup
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'cloudsentrics',
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
    service: 'gmail',  // Use your email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
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
  const { amount, email, fullName, phone, country, course, paymentMethod, registrationToken } = req.body;

  try {
    // Create payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
      metadata: {
        full_name: fullName,
        phone: phone,
        country: country,
        course: course,
        payment_method: paymentMethod,
        registration_token: registrationToken,
      },
    });

    // Send the payment token to the user's email
    sendPaymentEmail(email, paymentIntent.client_secret);  // Send the token to the user's email

    res.send({
      clientSecret: paymentIntent.client_secret,  // Send client secret to complete the payment
    });
  } catch (error) {
    console.error('Stripe Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Webhook route for Stripe payment success
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    // Verify the webhook signature to ensure it comes from Stripe
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.log('❌ Webhook signature verification failed:', err);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle successful payment
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    const studentEmail = paymentIntent.receipt_email;  // The email from the payment intent

    // Extract metadata from the payment intent (passed during payment creation)
    const { full_name, phone, country, course, payment_method, registration_token } = paymentIntent.metadata;

    // Insert student details into the MySQL database
    const sql = `
      INSERT INTO students (
        full_name, email, phone, country, course,
        payment_method, registration_token
      )
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      full_name,
      studentEmail,
      phone,
      country,
      course,
      payment_method,
      registration_token,
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('❌ Error inserting into database:', err);
        return res.status(500).json({ error: 'Database error' });
      }

      console.log('✅ Student registered:', result);
      res.status(200).send({ message: 'Student registered successfully after payment.' });
    });
  } else {
    // Handle other Stripe events here if necessary
    res.status(200).send('Event received');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
