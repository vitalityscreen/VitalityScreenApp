const express = require('express');
const router = express.Router();

// Placeholder: Save user survey data
router.post('/', (req, res) => {
  console.log('Survey data received:', req.body);
  res.status(200).json({ message: 'Survey submitted' });
});

module.exports = router;
