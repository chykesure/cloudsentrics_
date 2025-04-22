const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// ✅ Correct Hostinger SMTP transporter (use only this)
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,  // your email (e.g., info@cloudsentrics.org)
    pass: process.env.EMAIL_PASS,  // your email password (or app password)
  },
});

// POST endpoint to handle form submission
router.post('/enquiry', async (req, res) => {
  const {
    full_name,
    email,
    phone,
    location,
    course,
    referral,
    background
  } = req.body;

  // Construct the email content
  const mailOptions = {
    from: `"CloudSentrics Contact Form" <${process.env.EMAIL_USER}>`,  // sender email
    to: process.env.EMAIL_USER, // recipient email (your email)
    subject: '📨 New Contact Form Submission',
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Full Name:</strong> ${full_name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Course:</strong> ${course}</p>
      <p><strong>Referral:</strong> ${referral || 'N/A'}</p>
      <p><strong>Background Information:</strong> ${background || 'N/A'}</p>
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      success: true,
      message: 'Contact message sent successfully',
    });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send contact message',
      error: error.message,
    });
  }
});

module.exports = () => {
  return router;
};
