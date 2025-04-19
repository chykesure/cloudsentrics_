// This should be part of the file where your routes are set up
app.post('/verifytoken', (req, res) => {
    const { token, email } = req.body;

    // Check if token and email are provided
    if (!token || !email) {
        return res.status(400).json({ error: 'Token and email are required' });
    }

    // Query the database to find the student record by email and check if the token matches
    const sql = 'SELECT registration_token FROM students WHERE email = ?';
    db.query(sql, [email], (err, result) => {
        if (err) {
            console.error('❌ Error querying the database:', err);
            return res.status(500).json({ error: 'Failed to verify token', details: err });
        }

        // If no user is found with the provided email
        if (result.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Extract the token from the database record
        const storedToken = result[0].registration_token;

        // Compare the stored token with the provided token
        if (token === storedToken) {
            return res.status(200).json({ valid: true });
        } else {
            return res.status(200).json({ valid: false });
        }
    });
});
