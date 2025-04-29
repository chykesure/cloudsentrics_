const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

const upload = multer({ dest: 'uploads/' }); // Store file temporarily

router.post('/career', upload.single('file'), async (req, res) => {
  const {
    firstName,
    lastName,
    companyName,
    industry,
    email,
    phone,
    message,
    marketingEmails,
    keepDetails,
  } = req.body;

  const cvFile = req.file;

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // 📥 Mail to CloudSentrics with CV attachment
  const mailOptions = {
    from: `"Career Application" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: '📝 New Career Form Submission',
    html: `
      <h2>New Career Application</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Company:</strong> ${companyName}</p>
      <p><strong>Industry:</strong> ${industry}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Marketing Emails:</strong> ${marketingEmails === 'true' ? 'Yes' : 'No'}</p>
      <p><strong>Keep Details:</strong> ${keepDetails === 'true' ? 'Yes' : 'No'}</p>
    `,
    attachments: cvFile ? [
      {
        filename: cvFile.originalname,
        path: cvFile.path,
      },
    ] : [],
  };

  // 📬 Confirmation email to applicant (no attachment)
  const confirmationMail = {
    from: `"CloudSentrics Careers" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: '✅ Your Application Has Been Received',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; color: #333;">
        <div style="text-align: center;">
          <img src="https://cloudsentrics.org/assets/logo.jpg" alt="CloudSentrics Logo" style="width: 120px; margin-bottom: 20px;" />
        </div>
        <h2 style="color: #333;">Hi ${firstName},</h2>
        <p style="font-size: 16px;">Thanks for applying to CloudSentrics. We've received your career form and CV.</p>
        <p style="font-size: 16px;">Our team will review your application and get in touch if there's a fit.</p>
        <p style="font-size: 16px;">If you have any urgent questions, feel free to reply to this email.</p>
        <hr style="margin: 30px 0;">
        <p style="font-size: 12px; color: #999;">
          This is an automated message from CloudSentrics.org Careers.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationMail);

    if (cvFile) {
      fs.unlink(cvFile.path, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }

    res.status(200).json({ success: true, message: 'Career form submitted and confirmation sent!' });
  } catch (error) {
    console.error('❌ Error sending career form or confirmation:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
