const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

// ✅ Hostinger SMTP Transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = () => {
  router.post('/contact', async (req, res) => {
    const {
      firstName,
      lastName,
      companyName,
      industry,
      email,
      phone,
      services,
      message,
      consent,
      referralName, // <-- added
    } = req.body;


    // Mail to CloudSentrics (you)
    const mailOptions = {
      from: `"CloudSentrics Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: '📨 New Contact Form Submission',
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Referral Name:</strong> ${referralName || 'N/A'}</p>
        <p><strong>Services Selected:</strong> ${Array.isArray(services) ? services.join(', ') : services}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Consent to Contact:</strong> ${consent ? 'Yes' : 'No'}</p>
      `,
    };

    // Confirmation Email to the User
    const confirmationMail = {
      from: `"CloudSentrics" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `✅ Thank You for Contacting CloudSentrics`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; color: #333;">
          <div style="text-align: center;">
            <img src="https://cloudsentrics.org/assets/logo.jpg" alt="CloudSentrics Logo" style="width: 120px; margin-bottom: 20px;" />
          </div>
          <h2 style="color: #333;">Hi ${firstName},</h2>
          <p style="font-size: 16px;">Thank you for reaching out to CloudSentrics.</p>
          <p style="font-size: 16px;">We’ve received your message and will be in touch soon regarding your inquiry.</p>
          <p style="font-size: 16px;">If you need immediate support, feel free to reply to this email.</p>
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
        message: 'Contact message sent and confirmation email delivered',
      });
    } catch (error) {
      console.error('❌ Error sending contact or confirmation email:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to send contact or confirmation message',
        error: error.message,
      });
    }
  });

  return router;
};
