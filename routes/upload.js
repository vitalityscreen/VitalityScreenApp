const express = require('express');
const multer = require('multer');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('file'), (req, res) => {
  console.log('File uploaded:', req.file.originalname);
  // Simulate AI-parsing response
  res.status(200).json({ message: 'File received and processed' });
});

module.exports = router;
