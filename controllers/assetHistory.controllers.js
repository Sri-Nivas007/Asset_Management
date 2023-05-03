const db = require('../database/models/index.js');
const AssetHistory = db.assetHistories;
// Get all assets
const getAllAssets = async (req, res) => {
  try {
    const assets = await AssetHistory.findAll();
    res.status(200).json({ assets });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Create new asset
const createAsset = async (req, res) => {
  const {
    serialNumber,
    assetType,
    Make_Model,
    purchaseDate,
    purchaseValue,
    assignedTo,
    assignmentDate,
    returnDate,
    reasonForReturn,
    scrapDate,
  } = req.body;
  try {
    const newAsset = await AssetHistory.create({
      serialNumber,
      assetType,
      Make_Model,
      purchaseDate,
      purchaseValue,
      assignedTo,
      assignmentDate,
      returnDate,
      reasonForReturn,
      scrapDate,
    });
    res.status(201).json({ newAsset });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Update asset
const updateAsset = async (req, res) => {
  const { id } = req.params;
  const {
    serialNumber,
    assetType,
    Make_Model,
    purchaseDate,
    purchaseValue,
    assignedTO,
    assignmentDate,
    returnDate,
    reasonForReturn,
    scrapDate,
  } = req.body;
  try {
    const asset = await AssetHistory.findOne({ where: { id } });
    if (!asset) {
      return res.status(404).json({ message: 'Asset not found' });
    }
    await AssetHistory.update(
      {
        serialNumber,
        assetType,
        Make_Model,
        purchaseDate,
        purchaseValue,
        assignedTO,
        assignmentDate,
        returnDate,
        reasonForReturn,
        scrapDate,
      },
      { where: { id } }
    );
    res.status(200).json({ message: 'Asset updated successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Delete asset
const deleteAsset = async (req, res) => {
  const { id } = req.params;
  try {
    const asset = await AssetHistory.findOne({ where: { id } });
    if (!asset) {
      return res.status(404).json({ message: 'Asset not found' });
    }
    await AssetHistory.destroy({ where: { id } });
    res.status(200).json({ message: 'Asset deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  getAllAssets,
  createAsset,
  updateAsset,
  deleteAsset,
};
