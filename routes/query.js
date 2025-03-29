const express = require('express');
const router = express.Router();
const { db } = require('../db/mockDB');
const translator = require('../utils/translator');

router.post('/', async (req, res) => {
    const { query } = req.body;

    if (!query) return res.status(400).json({ error: 'Query is required' });

    const sqlQuery = translator(query);  // Translate NL to SQL

    db.all(sqlQuery, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ result: rows });
    });
});

module.exports = router;
