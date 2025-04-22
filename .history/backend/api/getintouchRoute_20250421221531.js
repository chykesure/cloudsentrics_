require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// Middleware to parse JSON body
app.use(bodyParser.json());

// Set up the transport using your SMTP server
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

// Enquiry route to handle form submissions
router.post('/getintouch', async (req, res) => {
  const { user_name, user_email, user_phone, user_country } = req.body;

  const mailOptions = {
    from: `"CloudSentrics Get In Touch Form" <${process.env.EMAIL_USER}>`, // Sender address
    to: process.env.EMAIL_USER, // Receiver address (Your email)
    subject: '📨 New getintouch Form Submission',
    html: `
      <h2>New getintouch Form Submission</h2>
      <p><strong>Full Name:</strong> ${user_name}</p>
      <p><strong>Email:</strong> ${user_email}</p>
      <p><strong>Phone:</strong> ${user_phone || 'N/A'}</p>
      <p><strong>Country:</strong> ${user_country || 'N/A'}</p>
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    // Respond with success
    res.status(200).json({
      success: true,
      message: 'Contact message sent successfully',
    });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    // Respond with error
    res.status(500).json({
      success: false,
      message: 'Failed to send contact message',
      error: error.message,
    });
  }
});

module.exports = router;