const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const nodemailer = require('nodemailer');

// Setup Hostinger mail transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Create PaymentIntent + send confirmation email
router.post('/create-payment-intent', async (req, res) => {
  const { amount, email, course } = req.body;

  try {
    if (!amount || !email) {
      return res.status(400).json({ error: 'Amount and email are required.' });
    }

    const parsedAmount = parseInt(amount, 10);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      return res.status(400).json({ error: 'Invalid amount provided.' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: parsedAmount,
      currency: 'usd',
      receipt_email: email,
      description: `Course Enrollment Payment: ${course || 'N/A'}`,
    });

    // 📧 Confirmation email to student
    const confirmMail = {
      from: `"CloudSentrics" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '✅ Enrollment Payment Started',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; color: #333;">
          <h2>Hello,</h2>
          <p>We've received your request to enroll in <strong>${course || 'a course'}</strong>.</p>
          <p>Your payment is being processed. Once it’s confirmed, you’ll receive a follow-up email with your access details.</p>
          <p>If you have any questions, reply to this email or reach us at info@cloudsentrics.org.</p>
          <hr />
          <p style="font-size: 12px; color: #999;">CloudSentrics | Education & Innovation</p>
        </div>
      `,
    };

    // Send confirmation email
    await transporter.sendMail(confirmMail);

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('❌ Stripe Error:', error.message);
    res.status(500).json({ error: 'Failed to create payment intent.' });
  }
});

module.exports = router;
