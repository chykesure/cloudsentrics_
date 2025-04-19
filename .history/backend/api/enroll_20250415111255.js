const express = require('express');
const router = express.Router();

// You must pass the db and token generator when requiring this module
module.exports = (db, generateToken) => {
  router.post('/', (req, res) => {
    // Destructure request body
    const { fullName, email, phone, country, course, paymentMethod } = req.body;

    // Log the incoming request data to ensure it's being received
    console.log('Received data:', { fullName, email, phone, country, course, paymentMethod });

    // Check if required fields are missing
    if (!fullName || !email || !phone || !country || !course || !paymentMethod) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Generate a registration token
    const registrationToken = generateToken();
    if (!registrationToken) {
      return res.status(500).json({ error: 'Failed to generate registration token' });
    }

    // Get current date-time in MySQL compatible format
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');

    // Prepare SQL query to insert student data into DB
    const sql = `
      INSERT INTO students (
        full_name, email, phone, country, course,
        payment_method, registration_token, created_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    // Values to be inserted into the database
    const values = [fullName, email, phone, country, course, paymentMethod, registrationToken, createdAt];

    // Execute the query
    db.query(sql, values, (err, result) => {
      if (err) {
        // Log the error and send a more detailed response
        console.error('❌ Error inserting into DB:', err);
        return res.status(500).json({ error: 'Failed to save student info', details: err.message });
      }

      // Log successful insert and send success response
      console.log('✅ Student info saved to DB (/api/enroll):', result);
      res.json({ message: 'Student data saved successfully', result });
    });
  });

  return router;
};
