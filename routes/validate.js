const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { query } = req.body;

    if (!query) return res.status(400).json({ error: 'Query is required' });

    const isValid = query.toLowerCase().includes('select');

    res.json({ valid: isValid, message: isValid ? 'Valid query' : 'Invalid query' });
});

module.exports = router;
