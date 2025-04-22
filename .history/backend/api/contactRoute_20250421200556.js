const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();
const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com', // ✅ Hostinger's SMTP server
    port: 465, // or 587
    secure: true, // use SSL (true for 465, false for 587)
    auth: {
      user: process.env.EMAIL_USER, // e.g. info@cloudsentrics.org
      pass: process.env.EMAIL_PASS, // your email password (or generated SMTP password)
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
    } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"CloudSentrics Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Sending to your own inbox
      subject: '📨 New Contact Form Submission',
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Services Selected:</strong> ${Array.isArray(services) ? services.join(', ') : services}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Consent to Contact:</strong> ${consent ? 'Yes' : 'No'}</p>
      `,
    };

    try {
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

  return router;
};
