const express = require('express');
const router = express.Router();

// Placeholder login route
router.post('/login', (req, res) => {
  res.json({ token: 'mock-jwt-token', user: { id: 1, name: 'Test User' } });
});

// Placeholder register route
router.post('/register', (req, res) => {
  res.status(201).json({ message: 'User registered successfully' });
});

module.exports = router;
