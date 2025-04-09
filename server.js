require('dotenv').config();
const express = require('express');
const { connectToDb } = require('./config/db');
const queryRoutes = require('./routes/queryRoute');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', queryRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('Gen AI Query Engine is running');
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server after DB connection
connectToDb((err) => {
  if (err) {
    console.error('Failed to connect to DB:', err);
    process.exit(1);
  }
  else{
    console.log("Connected to mongodb!")
  }
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});