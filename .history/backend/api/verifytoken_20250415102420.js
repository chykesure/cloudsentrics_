const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post('/verifytoken', (req, res) => {
    const { token, email } = req.body;

    // Validate input
    if (!token || !email) {
      return res.status(400).json({ error: 'Token and email are required' });
    }

    // Query the database for the registration token of the user
    const sql = 'SELECT registration_token FROM students WHERE email = ?';
    db.query(sql, [email], (err, result) => {
      if (err) {
        console.error('❌ Error querying the database:', err);
        return res.status(500).json({ error: 'Failed to verify token', details: err.message });
      }

      if (result.length === 0) {
        // No user found with the provided email
        return res.status(404).json({ error: 'User not found' });
      }

      const storedToken = result[0].registration_token;
      const isValid = token === storedToken;  // Compare the provided token with the stored one

      console.log('🔐 Comparing tokens:', { inputToken: token, storedToken });

      // Respond with the validity of the token
      res.status(200).json({ valid: isValid });
    });
  });

  return router;
};
