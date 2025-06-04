const express = require('express');
const router = express.Router();

// Sample route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the backend API!' });
});

module.exports = router;