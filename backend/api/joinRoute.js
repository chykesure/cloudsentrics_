require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
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
router.post('/join', async (req, res) => {
  const { user_name, user_email } = req.body;

  const adminMailOptions = {
    from: `"CloudSentrics Get In Touch Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: '📨 New Join Our Community Form Submission',
    html: `
      <h2>New Join Our Community Form Submission</h2>
      <p><strong>Full Name:</strong> ${user_name}</p>
      <p><strong>Email:</strong> ${user_email}</p>
    `,
  };

  const userMailOptions = {
    from: `"CloudSentrics Team" <${process.env.EMAIL_USER}>`,
    to: user_email,
    subject: '🎉 Welcome to CloudSentrics!',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto;">
        <div style="text-align: center;">
          <img src="https://cloudsentrics.org/assets/logo.jpg" alt="CloudSentrics Logo" style="width: 120px; margin-bottom: 20px;" />
        </div>
        <h2 style="color: #333;">Hi ${user_name}, 👋</h2>
        <p style="font-size: 16px; line-height: 1.6;">
          Thank you for joining the <strong>CloudSentrics Community</strong>! We're thrilled to have you with us.
        </p>
        <p style="font-size: 16px; line-height: 1.6;">
          You’ve just taken the first step into a world of innovation, collaboration, and limitless possibilities in the cloud and tech space.
        </p>
        <p style="font-size: 16px; line-height: 1.6;">
          We'll be keeping you updated with exclusive insights, resources, and opportunities tailored just for our members.
        </p>
        <a href="https://cloudsentrics.org/StudentPage" style="display: inline-block; padding: 12px 24px; background-color: #00CC99; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0; font-weight: bold;">
          Explore the Community →
        </a>
        <p style="font-size: 14px; color: #777; line-height: 1.6; margin-top: 30px;">
          If you have any questions, feel free to reply to this email — we’re here to help.
        </p>
        <hr style="margin: 30px 0;">
        <p style="font-size: 12px; color: #999;">
          You’re receiving this email because you signed up to stay connected with CloudSentrics. We're happy you're here! 🌐
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(adminMailOptions); // Admin
    await transporter.sendMail(userMailOptions); // User

    res.status(200).json({
      success: true,
      message: 'Emails sent successfully',
    });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error.message,
    });
  }
});

// Mount the router onto the

module.exports = router;