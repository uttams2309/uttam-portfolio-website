// api/models/portfolioModel.js
const { ObjectId } = require('mongodb');
const { connectToDatabase } = require('../mongodb');

// Collection names
const PORTFOLIO_COLLECTION = 'portfolio';

/**
 * Get complete portfolio data
 */
async function getPortfolioData() {
  try {
    const db = await connectToDatabase();
    const portfolio = await db.collection(PORTFOLIO_COLLECTION).findOne({ type: 'portfolio_data' });
    
    // If no data exists yet, return empty object
    if (!portfolio) {
      return {};
    }
    
    return portfolio.data || {};
  } catch (error) {
    console.error('Error in getPortfolioData:', error);
    throw error;
  }
}

/**
 * Update complete portfolio data
 * @param {Object} data - The complete portfolio data
 */
async function updatePortfolioData(data) {
  try {
    const db = await connectToDatabase();
    
    // Upsert the portfolio data
    const result = await db.collection(PORTFOLIO_COLLECTION).updateOne(
      { type: 'portfolio_data' },
      { 
        $set: { 
          data,
          updatedAt: new Date()
        },
        $setOnInsert: {
          createdAt: new Date()
        }
      },
      { upsert: true }
    );
    
    return { success: true, message: 'Portfolio data updated successfully' };
  } catch (error) {
    console.error('Error in updatePortfolioData:', error);
    throw error;
  }
}

/**
 * Get a specific section of the portfolio
 * @param {string} section - The section to retrieve (e.g., 'about', 'projects')
 */
async function getPortfolioSection(section) {
  try {
    const db = await connectToDatabase();
    const portfolio = await db.collection(PORTFOLIO_COLLECTION).findOne({ type: 'portfolio_data' });
    
    if (!portfolio || !portfolio.data || !portfolio.data[section]) {
      return null;
    }
    
    return portfolio.data[section];
  } catch (error) {
    console.error(`Error in getPortfolioSection (${section}):`, error);
    throw error;
  }
}

/**
 * Update a specific section of the portfolio
 * @param {string} section - The section to update
 * @param {Object} data - The new section data
 */
async function updatePortfolioSection(section, data) {
  try {
    const db = await connectToDatabase();
    
    // Create the update path
    const updatePath = `data.${section}`;
    
    const result = await db.collection(PORTFOLIO_COLLECTION).updateOne(
      { type: 'portfolio_data' },
      { 
        $set: { 
          [updatePath]: data,
          updatedAt: new Date()
        },
        $setOnInsert: {
          createdAt: new Date()
        }
      },
      { upsert: true }
    );
    
    if (result.matchedCount === 0 && result.upsertedCount === 0) {
      return null;
    }
    
    return { success: true, message: `${section} data updated successfully` };
  } catch (error) {
    console.error(`Error in updatePortfolioSection (${section}):`, error);
    throw error;
  }
}

/**
 * Add item to a section array
 * @param {string} section - The section (e.g., 'about', 'projects')
 * @param {string} arrayField - The array field within the section (e.g., 'skills', 'education')
 * @param {Object} item - The item to add
 */
async function addSectionItem(section, arrayField, item) {
  try {
    const db = await connectToDatabase();
    
    // Add _id if not present
    if (!item._id) {
      item._id = new ObjectId();
    }
    
    // Create the update path
    const updatePath = `data.${section}.${arrayField}`;
    
    const result = await db.collection(PORTFOLIO_COLLECTION).updateOne(
      { type: 'portfolio_data' },
      { 
        $push: { [updatePath]: item },
        $set: { updatedAt: new Date() },
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
    
    return { success: true, message: 'Item added successfully', item };
  } catch (error) {
    console.error(`Error in addSectionItem:`, error);
    throw error;
  }
}

/**
 * Delete item from a section array
 * @param {string} section - The section (e.g., 'about', 'projects')
 * @param {string} arrayField - The array field within the section (e.g., 'skills', 'education')
 * @param {string} itemId - The ID of the item to delete
 */
async function deleteSectionItem(section, arrayField, itemId) {
  try {
    const db = await connectToDatabase();
    
    // Create the update path
    const updatePath = `data.${section}.${arrayField}`;
    
    let id;
    try {
      id = new ObjectId(itemId);
    } catch (e) {
      // If itemId is not a valid ObjectId, try to remove by string ID
      id = itemId;
    }
    
    const result = await db.collection(PORTFOLIO_COLLECTION).updateOne(
      { type: 'portfolio_data' },
      { 
        $pull: { [updatePath]: { _id: id } },
        $set: { updatedAt: new Date() }
      }
    );
    
    if (result.modifiedCount === 0) {
      return null;
    }
    
    return { success: true };
  } catch (error) {
    console.error(`Error in deleteSectionItem:`, error);
    throw error;
  }
}

module.exports = {
  getPortfolioData,
  updatePortfolioData,
  getPortfolioSection,
  updatePortfolioSection,
  addSectionItem,
  deleteSectionItem
};