const express = require('express');
const router = express.Router();
const translator = require('../utils/translator');

router.post('/', (req, res) => {
    const { query } = req.body;

    if (!query) return res.status(400).json({ error: 'Query is required' });

    const pseudoSQL = translator(query);
    res.json({ query: query, sql: pseudoSQL });
});

module.exports = router;
