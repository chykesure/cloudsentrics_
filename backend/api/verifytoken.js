const express = require('express');
const router = express.Router();

module.exports = (db) => {
  // Define the POST route for verifying the token
  router.post('/verifytoken', (req, res) => {
    const { token, email } = req.body;  // Extract token and email from request body

    // Check if both token and email are provided in the request body
    if (!token || !email) {
      return res.status(400).json({ error: 'Token and email are required' });
    }

    // Query the database to get the registration_token for the provided email
    const sql = 'SELECT registration_token FROM students WHERE email = ?';
    db.query(sql, [email], (err, result) => {
      if (err) {
        // Handle any database query errors
        console.error('❌ Error querying the database:', err);
        return res.status(500).json({ error: 'Failed to verify token', details: err.message });
      }

      if (result.length === 0) {
        // If no user with the given email exists in the database
        return res.status(404).json({ error: 'User not found' });
      }

      // Retrieve the stored registration token from the query result
      const storedToken = result[0].registration_token;  // This is the token in the database for the user

      console.log('🔐 Comparing tokens:', { inputToken: token, storedToken });

      // Compare the provided token with the stored token
      const isValid = String(token).trim() === String(storedToken).trim();  // Ensure both are strings and trim spaces

      // Send response with verification result
      res.status(200).json({ valid: isValid });
    });
  });

  return router;
};
