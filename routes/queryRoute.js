const express = require('express');
const { processQuery } = require('../controller/queryController');
const router = express.Router();

// Authentication middleware
const authenticate = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

router.post('/query', authenticate, processQuery);

module.exports = router;