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

    // Immediately store student information in the database, even before payment success
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

// Route to handle successful payment and update the student's payment status in DB
app.post('/payment-success', async (req, res) => {
  const { email, registration_token, course_token } = req.body;

  try {
    // Check if the payment was successful (front-end will pass this information)
    // Update payment status in the database
    let updateQuery = '';
    let values = [];

    // If the payment is for registration, update registration_paid as true
    if (registration_token) {
      updateQuery = `
        UPDATE students
        SET registration_paid = true
        WHERE email = ?
      `;
      values = [email];
    }

    // If the payment is for the course, update course_paid as true
    if (course_token) {
      updateQuery = `
        UPDATE students
        SET course_paid = true
        WHERE email = ?
      `;
      values = [email];
    }

    // Execute the query to update the payment status
    db.query(updateQuery, values, (err, result) => {
      if (err) {
        console.error('❌ Error updating database:', err);
        return res.status(500).json({ error: 'Database error' });
      }

      console.log('✅ Student payment status updated:', result);
      res.status(200).send({ message: 'Student payment status updated after payment.' });
    });
  } catch (error) {
    console.error('Error updating payment status:', error);
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
