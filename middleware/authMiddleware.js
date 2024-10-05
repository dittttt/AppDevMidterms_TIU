const jwt = require('jsonwebtoken');
const SECRET_KEY = 'ditwashere';

exports.authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], SECRET_KEY);
    req.user = { id: decoded.id };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  console.log('Token received:', token);
};

