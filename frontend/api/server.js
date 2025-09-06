// api/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const portfolioRoutes = require('./routes/portfolioRoutes');
const { connectToDatabase } = require('./mongodb');

// Initialize express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB when the server starts
connectToDatabase()
  .then(() => {
    console.log('MongoDB connection established');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });

// Routes
app.use('/api/portfolio', portfolioRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Portfolio API is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;