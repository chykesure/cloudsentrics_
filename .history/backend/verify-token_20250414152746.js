// server.js or payment.js

const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Dummy token storage for demonstration (You can connect this to your database)
const validTokens = [
    { email: 'chike.com', token: '123456' },
    { email: 'test@example.com', token: '654321' }
];

// POST /verify-token route
app.post('/verify-token', (req, res) => {
    const { email, token } = req.body;

    // Check if the token matches for the given email
    const isValid = validTokens.some(entry => entry.email === email && entry.token === token);

    res.json({ valid: isValid });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
