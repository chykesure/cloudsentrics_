const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
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

// Route to create a Stripe payment intent and store student info in DB immediately
app.post('/create-payment-intent', async (req, res) => {
  const { amount, email, full_name, phone, country, course, payment_method, registration_token, course_token } = req.body;

  try {
    // Create payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    // Immediately store student information in the database, even before webhook
    const sql = `
      INSERT INTO students (
        full_name, email, phone, country, course,
        payment_method, registration_token, course_token,
        registration_paid, course_paid
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      full_name,
      email,  // Using the provided email from the frontend
      phone,
      country,
      course,
      payment_method,
      registration_token,
      course_token,
      false, // Initially setting registration_paid to false
      false, // Initially setting course_paid to false
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('❌ Error inserting into database:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      console.log('✅ Student info saved to DB:', result);
    });

    // Send the payment token to the user's email
    sendPaymentEmail(email, paymentIntent.client_secret);  // Send the token to the user's email

    // Return client secret for frontend to complete payment
    res.send({
      clientSecret: paymentIntent.client_secret,
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
    // Verify the webhook signature
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.log('❌ Webhook signature verification failed:', err);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the payment_intent.succeeded event
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    const studentEmail = paymentIntent.receipt_email;  // You can save this email when the payment is successful

    // Retrieve the student's registration status and course status from metadata
    const {
      registration_token,
      course_token,
      registration_paid,
      course_paid,
    } = paymentIntent.metadata;  // These tokens would be set based on the flow of your payment logic

    // If the payment is for registration, update registration_paid as true
    let updateQuery = '';
    let values = [];

    if (registration_token) {
      updateQuery = `
        UPDATE students
        SET registration_paid = true
        WHERE email = ?
      `;
      values = [studentEmail];  // Use email from the payment intent
    }

    // If the payment is for the course, update course_paid as true
    if (course_token) {
      updateQuery = `
        UPDATE students
        SET course_paid = true
        WHERE email = ?
      `;
      values = [studentEmail];  // Use email from the payment intent
    }

    // Execute the query based on the payment type (registration or course)
    db.query(updateQuery, values, (err, result) => {
      if (err) {
        console.error('❌ Error updating database:', err);
        return res.status(500).json({ error: 'Database error' });
      }

      console.log('✅ Student payment status updated:', result);
      res.status(200).send({ message: 'Student payment status updated after payment.' });
    });
  } else {
    // Other Stripe events can be handled here if necessary
    res.status(200).send('Event received');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
