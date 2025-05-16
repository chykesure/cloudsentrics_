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
  try {
    const {
      amount,
      email,
      fullName,
      phone,
      country,
      course,
      paymentMethod,
    } = req.body;

    // ✅ Validate required fields
    if (!amount || !email || !fullName) {
      return res.status(400).json({
        error: 'Missing required fields. Please provide amount, email, and full name.'
      });
    }

    const parsedAmount = parseInt(amount, 10);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      return res.status(400).json({
        error: 'Invalid payment amount. Please enter a valid amount in cents.'
      });
    }

    // ✅ Create Stripe PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: parsedAmount,
      currency: 'usd',
      receipt_email: email,
      payment_method_types: ['card'],
      metadata: {
        full_name: fullName,
        phone: phone || 'N/A',
        country: country || 'N/A',
        course: course || 'N/A',
        payment_method: paymentMethod || 'N/A',
      },
      description: `Course Enrollment Payment: ${course || 'N/A'}`,
    });

    console.log('✅ PaymentIntent created:', paymentIntent.id);

    // 📧 Send confirmation email to user
    const confirmMail = {
      from: `"CloudSentrics" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '✅ Enrollment Payment Initiated',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; color: #333;">
          <h2>Hello ${fullName},</h2>
          <p>We’ve received your enrollment for <strong>${course || 'a course'}</strong>.</p>
          <p>Your payment is being processed. Once confirmed, you will receive further details.</p>
          <div style="margin-top: 20px;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Country:</strong> ${country || 'N/A'}</p>
            <p><strong>Payment Method:</strong> ${paymentMethod || 'N/A'}</p>
          </div>
          <hr />
          <p style="font-size: 12px; color: #999;">CloudSentrics | Innovation Meets Education</p>
        </div>
      `,
    };

    await transporter.sendMail(confirmMail);

    res.send({
      clientSecret: paymentIntent.client_secret,
      message: 'Payment intent created and confirmation email sent.'
    });

  } catch (error) {
    console.error('❌ Stripe error:', error);

    if (error.type === 'StripeCardError') {
      let message = 'Your card was declined.';

      if (error.decline_code === 'insufficient_funds') {
        message = 'Transaction declined: Insufficient funds on your card.';
      } else if (error.decline_code === 'expired_card') {
        message = 'Transaction declined: Your card has expired.';
      } else if (error.decline_code === 'incorrect_cvc') {
        message = 'Transaction declined: Incorrect CVC code.';
      } else if (error.decline_code === 'incorrect_number') {
        message = 'Transaction declined: Incorrect card number.';
      }

      return res.status(400).json({ error: message });
    }

    if (error.type === 'StripeInvalidRequestError') {
      return res.status(400).json({
        error: 'Invalid parameters sent to Stripe. Please check your data.'
      });
    }

    if (error.type === 'StripeAPIError') {
      return res.status(500).json({
        error: 'Stripe internal error. Please try again later.'
      });
    }

    return res.status(500).json({
      error: 'An unexpected error occurred. Please try again later.'
    });
  }
});

module.exports = router;
