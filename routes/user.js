const express = require('express');
const { registerUser, loginUser, getProfile } = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

// ROUTES
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware, getProfile);

module.exports = router;
