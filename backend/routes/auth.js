
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  res.json({ token: 'mock-token', user: { id: 1, name: 'Test User' } });
});

router.post('/register', (req, res) => {
  res.status(201).json({ message: 'User registered' });
});

module.exports = router;
