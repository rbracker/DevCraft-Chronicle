const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'yourSecretKey';

const auth = {
  // Middleware to verify JWT token
  verifyToken: (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const decoded = jwt.verify(token, secretKey);
      req.user = decoded.user;
      next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: 'Invalid token' });
    }
  },

  // Function to generate JWT token
  generateToken: (user) => {
    return jwt.sign({ user }, secretKey, { expiresIn: '1h' });
  },
};

module.exports = auth;
