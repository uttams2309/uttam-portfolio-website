// api/routes/portfolioRoutes.js
const express = require('express');
const router = express.Router();
const { getPortfolioData, updatePortfolioData, getPortfolioSection, updatePortfolioSection, addSectionItem, deleteSectionItem } = require('../models/portfolioModel');

// Get all portfolio data
router.get('/', async (req, res) => {
  try {
    const portfolioData = await getPortfolioData();
    res.status(200).json(portfolioData);
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    res.status(500).json({ message: 'Error fetching portfolio data', error: error.message });
  }
});

// Update all portfolio data
router.put('/', async (req, res) => {
  try {
    const updatedData = req.body;
    const result = await updatePortfolioData(updatedData);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error updating portfolio data:', error);
    res.status(500).json({ message: 'Error updating portfolio data', error: error.message });
  }
});

// Get specific portfolio section
router.get('/:section', async (req, res) => {
  try {
    const { section } = req.params;
    const sectionData = await getPortfolioSection(section);
    
    if (!sectionData) {
      return res.status(404).json({ message: `Section '${section}' not found` });
    }
    
    res.status(200).json(sectionData);
  } catch (error) {
    console.error(`Error fetching ${req.params.section} data:`, error);
    res.status(500).json({ message: `Error fetching ${req.params.section} data`, error: error.message });
  }
});

// Update specific portfolio section
router.put('/:section', async (req, res) => {
  try {
    const { section } = req.params;
    const sectionData = req.body;
    
    const result = await updatePortfolioSection(section, sectionData);
    
    if (!result) {
      return res.status(404).json({ message: `Section '${section}' not found` });
    }
    
    res.status(200).json(result);
  } catch (error) {
    console.error(`Error updating ${req.params.section} data:`, error);
    res.status(500).json({ message: `Error updating ${req.params.section} data`, error: error.message });
  }
});

// Add item to a specific section array (e.g., projects, skills)
router.post('/:section/:arrayField', async (req, res) => {
  try {
    const { section, arrayField } = req.params;
    const newItem = req.body;
    
    const result = await addSectionItem(section, arrayField, newItem);
    
    if (!result) {
      return res.status(404).json({ message: `Section '${section}' or array field '${arrayField}' not found` });
    }
    
    res.status(201).json(result);
  } catch (error) {
    console.error(`Error adding item to ${req.params.section}.${req.params.arrayField}:`, error);
    res.status(500).json({ message: `Error adding item to ${req.params.section}.${req.params.arrayField}`, error: error.message });
  }
});

// Delete item from a specific section array
router.delete('/:section/:arrayField/:itemId', async (req, res) => {
  try {
    const { section, arrayField, itemId } = req.params;
    
    const result = await deleteSectionItem(section, arrayField, itemId);
    
    if (!result) {
      return res.status(404).json({ message: `Item not found or could not be deleted` });
    }
    
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(`Error deleting item:`, error);
    res.status(500).json({ message: 'Error deleting item', error: error.message });
  }
});

module.exports = router;