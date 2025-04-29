const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Get the token from the Authorization header

    if (!token) {
        console.log('Token missing in header');
        return res.status(403).json({ error: 'Token is required' });
    }

    console.log("Token received: ", token);  // Log the token received

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            // Explicit error handling for token expiration and invalid token
            if (err.name === 'TokenExpiredError') {
                console.error("Token expired error:", err);
                return res.status(401).json({ error: 'Token expired', details: err.message });
            } else {
                console.error("Token verification error:", err);
                return res.status(401).json({ error: 'Invalid or expired token', details: err.message });
            }
        }

        console.log("Decoded token:", decoded);  // Log the decoded token for debugging
        req.user = decoded; // Attach the decoded user information to the request
        next();  // Proceed to the next middleware
    });
};

module.exports = verifyToken;
