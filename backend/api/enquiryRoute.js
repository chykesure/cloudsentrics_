const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post('/enquiry', async (req, res) => {
  const { full_name, email, phone, location, course, referral, background } = req.body;

  // Email to Admin (You)
  const mailOptions = {
    from: `"CloudSentrics Enquiry Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: '📨 New Enquiry Form Submission',
    html: `
      <h2>New Enquiry Form Submission</h2>
      <p><strong>Full Name:</strong> ${full_name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Course:</strong> ${course}</p>
      <p><strong>Referral:</strong> ${referral || 'N/A'}</p>
      <p><strong>Background Information:</strong> ${background || 'N/A'}</p>
    `,
  };

  // Email to the User
  const confirmationMail = {
    from: `"CloudSentrics" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `📚 Enquiry Received - ${course}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; color: #333;">
        <div style="text-align: center;">
          <img src="https://cloudsentrics.org/assets/logo.jpg" alt="CloudSentrics Logo" style="width: 120px; margin-bottom: 20px;" />
        </div>
        <h2 style="color: #333;">Hi ${full_name},</h2>
        <p style="font-size: 16px;">Thank you for your interest in our <strong>${course}</strong> program!</p>
        <p style="font-size: 16px;">We’ve received your enquiry and our team will get back to you shortly.</p>
        <p style="font-size: 16px;">If you have any further questions, feel free to reply to this email.</p>
        <hr style="margin: 30px 0;">
        <p style="font-size: 12px; color: #999;">
          This is an automated message from CloudSentrics.org.
        </p>
      </div>
    `,
  };

  try {
    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationMail);

    res.status(200).json({
      success: true,
      message: 'Enquiry received and confirmation sent to user',
    });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send enquiry or confirmation email',
      error: error.message,
    });
  }
});

module.exports = router;
