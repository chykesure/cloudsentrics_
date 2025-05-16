const express = require('express');
const router = express.Router();
//const generateToken = require('./utils/generateToken');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Setup email transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post('/', async (req, res) => {
  const { fullName, email, phone, country, course, paymentMethod } = req.body;

  if (!fullName || !email || !phone || !country || !course || !paymentMethod) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const user = { fullName, email, phone, course };

  //const token = generateToken(user);

  // Email to the user
  const userMailOptions = {
    from: `"CloudSentrics Courses" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `🎉 Course Payment Received - ${course}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; color: #333;">
        <div style="text-align: center;">
          <img src="https://cloudsentrics.org/assets/logo.jpg" alt="CloudSentrics Logo" style="width: 120px; margin-bottom: 20px;" />
        </div>
        <h2 style="color: #333;">Hi ${fullName},</h2>
        <p style="font-size: 16px;">Thank you for your payment for the <strong>${course}</strong> course with CloudSentrics!</p>
        <p style="font-size: 16px;">We have received your details and will contact you soon with further instructions.</p>
        <div style="margin-top: 20px; font-size: 16px;">
          <p><strong>📧 Email:</strong> ${email}</p>
          <p><strong>📱 Phone:</strong> ${phone}</p>
          <p><strong>🌍 Country:</strong> ${country}</p>
          <p><strong>💳 Payment Method:</strong> ${paymentMethod}</p>
        </div>
        <hr style="margin: 30px 0;">
        <p style="font-size: 12px; color: #999;">
          This is an automated message from CloudSentrics.org. If you have any questions, reply to this email.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(userMailOptions);

    res.json({
      message: 'Registration received and confirmation email sent!',
      student: user,
    });
  } catch (error) {
    console.error('❌ Error sending confirmation email:', error);
    res.status(500).json({
      error: 'Registration saved, but failed to send confirmation email',
      student: user,
    });
  }
});

module.exports = router;
