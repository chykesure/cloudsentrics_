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

  try {
    await transporter.sendMail(mailOptions);

    // Delete file after sending
    if (cvFile) {
      fs.unlink(cvFile.path, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }

    res.status(200).json({ success: true, message: 'Career form submitted!' });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
