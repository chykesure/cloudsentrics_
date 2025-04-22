const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/form', async (req, res) => {
  const {
    first_name,
    last_name,
    company,
    industry,
    email,
    phone,
    country,
    services,
    message,
    marketing
  } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${first_name} ${last_name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `📨 New Contact Form Submission - ${services}`,
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${first_name} ${last_name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Service:</strong> ${services}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Marketing Consent:</strong> ${marketing === 'on' ? 'Yes' : 'No'}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

module.exports = router;
