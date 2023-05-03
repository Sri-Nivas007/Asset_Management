const db = require('../database/models/index.js');
const returnAsset = db.returnAsset;

// GET /api/return-assets
const getReturnAssets = async (req, res) => {
  try {
    const assets = await returnAsset.findAll();
    res.json(assets);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// POST /api/return-assets
const createReturnAsset = async (req, res) => {
  const { assetType, employeeName, reasonForReturn, returnDate } = req.body;
  try {
    const asset = await returnAsset.create({
      assetType,
      employeeName,
      reasonForReturn,
      returnDate,
    });
    res.json(asset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// PUT /api/return-assets/:id
const updateReturnAsset = async (req, res) => {
  const { id } = req.params;
  const { assetType, employeeName, reasonForReturn, returnDate } = req.body;
  try {
    const asset = await returnAsset.findByPk(id);
    if (!asset) {
      return res.status(404).send('Asset not found');
    }
    await asset.update({
      assetType,
      employeeName,
      reasonForReturn,
      returnDate,
    });
    res.json(asset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// DELETE /api/return-assets/:id
const deleteReturnAsset = async (req, res) => {
  const { id } = req.params;
  try {
    const asset = await returnAsset.findByPk(id);
    if (!asset) {
      return res.status(404).send('Asset not found');
    }
    await asset.destroy();
    res.json({ message: 'Asset deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getReturnAssets,
  createReturnAsset,
  updateReturnAsset,
  deleteReturnAsset,
};
