// api/sample-data/seed-data.js
require('dotenv').config({ path: '../.env' });
const { MongoClient } = require('mongodb');
const { placeholderData } = require('../../src/data/placeholder');

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";
const DB_NAME = process.env.DB_NAME || "portfolio";

async function seedDatabase() {
  let client;

  try {
    // Connect to MongoDB
    client = await MongoClient.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('Connected successfully to MongoDB');
    
    // Get database and collection
    const db = client.db(DB_NAME);
    const portfolioCollection = db.collection('portfolio');
    
    // Check if data already exists
    const existingData = await portfolioCollection.findOne({ type: 'portfolio_data' });
    
    if (existingData) {
      console.log('Portfolio data already exists. Skipping seed operation.');
      console.log('To reseed, please manually delete the existing data first.');
      return;
    }
    
    // Insert portfolio data
    const result = await portfolioCollection.insertOne({
      type: 'portfolio_data',
      data: placeholderData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    console.log(`Inserted portfolio data with ID: ${result.insertedId}`);
    console.log('Database seeded successfully!');
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    if (client) {
      await client.close();
      console.log('MongoDB connection closed');
    }
  }
}

// Run the seed function
seedDatabase();