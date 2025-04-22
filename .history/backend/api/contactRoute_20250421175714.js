const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

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
            consent
        } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your email e.g. info@cloudsentrics.org
                pass: process.env.EMAIL_PASS, // App password or env-stored
            },
        });

        const mailOptions = {
            from: `"CloudSentrics Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // send to your own inbox
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
            res.status(200).json({ success: true, message: 'Contact message sent successfully' });
        } catch (err) {
            console.error('❌ Error sending contact email:', err);
            res.status(500).json({ success: false, message: 'Failed to send contact message' });
        }
    });

    return router;
};
