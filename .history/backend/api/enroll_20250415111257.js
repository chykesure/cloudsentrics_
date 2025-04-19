const express = require('express');
const router = express.Router();

module.exports = (db, generateToken) => {
  router.post('/', (req, res) => {
    const { fullName, email, phone, country, course, paymentMethod } = req.body;

    console.log('Received data:', { fullName, email, phone, country, course, paymentMethod });

    if (!fullName || !email || !phone || !country || !course || !paymentMethod) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // ✅ Check for duplicates before inserting
    const checkSql = `SELECT * FROM students WHERE email = ? AND course = ?`;
    db.query(checkSql, [email, course], (checkErr, existing) => {
      if (checkErr) {
        console.error('❌ Error checking for duplicates:', checkErr);
        return res.status(500).json({ error: 'Database error', details: checkErr.message });
      }

      if (existing.length > 0) {
        return res.status(409).json({ error: 'Student already enrolled for this course' });
      }

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
          return res.status(500).json({ error: 'Failed to save student info', details: err.message });
        }

        console.log('✅ Student info saved to DB (/api/enroll):', result);
        res.json({ message: 'Student data saved successfully', result });
      });
    });
  });

  return router;
};
