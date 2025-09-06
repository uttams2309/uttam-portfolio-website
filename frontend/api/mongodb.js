// api/mongodb.js
const { MongoClient } = require('mongodb');
require('dotenv').config();

// MongoDB Connection URL (from environment variables)
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";
const DB_NAME = process.env.DB_NAME || "portfolio";

// Create cached connection variable
let cachedDb = null;

// Function to connect to the database
async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    // Connect to the MongoDB cluster
    const client = await MongoClient.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Get reference to the database
    const db = client.db(DB_NAME);
    
    console.log(`Connected successfully to MongoDB: ${DB_NAME}`);
    
    // Cache the database connection
    cachedDb = db;
    
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

module.exports = { connectToDatabase };