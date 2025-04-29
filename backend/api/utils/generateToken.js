// utils/generateToken.js

const jwt = require('jsonwebtoken'); // Make sure this is installed

const generateToken = (user) => {
  const payload = {
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
    course: user.course,
  };

  // Use the secret key from .env for signing the token
  // Set expiration to 15 minutes (typical OTP expiration)
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '75m' });

  return token;
};

module.exports = generateToken;
