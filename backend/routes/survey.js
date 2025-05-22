
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log('Survey received:', req.body);
  res.status(200).json({ message: 'Survey saved' });
});

module.exports = router;
