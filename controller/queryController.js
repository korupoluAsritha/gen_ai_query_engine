const aiService = require('../services/aiService');
const dbService = require('../services/dbService');

const processQuery = async (req, res) => {
  try {
    const { query } = req.body;
    
    if (!query) {
      return res.status(400).json({ error: 'Query is required' });
    }

    // Step 1: Convert natural language to DB query
    const dbQuery = await aiService.convertToQuery(query);
    
    // Step 2: Execute query
    const results = await dbService.executeQuery(dbQuery);
    
    res.json({
      originalQuery: query,
      interpretedQuery: dbQuery,
      results
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Failed to process query',
      details: error.message 
    });
  }
};

module.exports = { processQuery };