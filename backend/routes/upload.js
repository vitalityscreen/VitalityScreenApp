
const express = require('express');
const multer = require('multer');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('file'), (req, res) => {
  console.log('Uploaded:', req.file.originalname);
  res.status(200).json({ message: 'File processed' });
});

module.exports = router;
