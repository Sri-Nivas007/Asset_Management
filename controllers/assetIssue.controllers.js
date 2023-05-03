const db = require('../database/models/index.js');
const AssetIssue = db.assetIssue;

const getAllAssetIssues = async (req, res) => {
  try {
    const assetIssues = await AssetIssue.findAll();
    res.status(200).json(assetIssues);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get a single asset issue by ID
const getAssetIssueById = async (req, res) => {
  const { id } = req.params;
  try {
    const assetIssue = await AssetIssue.findByPk(id);
    if (!assetIssue) {
      res.status(404).json({ message: `Asset issue with ID ${id} not found` });
    } else {
      res.status(200).json(assetIssue);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Create a new asset issue
const createAssetIssue = async (req, res) => {
  console.log('createAssetIssue', createAssetIssue)
  const { assetType, employeeName, issueDate } = req.body;
  try {
    const newAssetIssue = await AssetIssue.create({
      assetType,
      employeeName,
      issueDate,
    });
    res.status(201).json(newAssetIssue);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update an existing asset issue by ID
const updateAssetIssue = async (req, res) => {
  const { id } = req.params;
  const { assetType, employeeName, issueDate } = req.body;
  try {
    const assetIssue = await AssetIssue.findByPk(id);
    if (!assetIssue) {
      res.status(404).json({ message: `Asset issue with ID ${id} not found` });
    } else {
      await assetIssue.update({ assetType, employeeName, issueDate });
      res.status(200).json(assetIssue);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete an existing asset issue by ID
const deleteAssetIssue = async (req, res) => {
  const { id } = req.params;
  try {
    const assetIssue = await AssetIssue.findByPk(id);
    if (!assetIssue) {
      res.status(404).json({ message: `Asset issue with ID ${id} not found` });
    } else {
      await assetIssue.destroy();
      res.status(204).end();
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllAssetIssues,
  getAssetIssueById,
  createAssetIssue,
  updateAssetIssue,
  deleteAssetIssue,
};
