const express = require('express');
const router = express.Router();

// You must pass the db and token generator when requiring this module
module.exports = (db, generateToken) => {
  router.post('/', (req, res) => {
    const { fullName, email, phone, country, course, paymentMethod } = req.body;
    const registrationToken = generateToken();
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const sql = `
      INSERT INTO students (
        full_name, email, phone, country, course,
        payment_method, registration_token, created_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [fullName, email, phone, country, course, paymentMethod, registrationToken, createdAt];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('❌ Error inserting into DB:', err);
        return res.status(500).json({ error: 'Failed to save student info', details: err });
      }

      console.log('✅ Student info saved to DB (/api/enroll)');
      res.json({ message: 'Student data saved successfully' });
    });
  });

  return router;
};
