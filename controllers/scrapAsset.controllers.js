const db = require('../database/models/index.js');
const scrapAsset = db.scrapAsset;

const getAllScrapAssets = async (req, res) => {
  try {
    const scrapAssets = await scrapAsset.findAll();
    res.json(scrapAssets);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

const createScrapAsset = async (req, res) => {
  const {
    assetType,
    serialNumber,
    modelNumber,
    purchaseDate,
    warrantyExpires,
  } = req.body;
  try {
    const scrapAssetObj = await scrapAsset.create({
      assetType,
      serialNumber,
      modelNumber,
      purchaseDate,
      warrantyExpires,
    });
    res.json(scrapAssetObj);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

const updateScrapAsset = async (req, res) => {
  const { id } = req.params;
  const {
    assetType,
    serialNumber,
    modelNumber,
    purchaseDate,
    warrantyExpires,
  } = req.body;
  try {
    const scrapAssetObj = await scrapAsset.findByPk(id);
    if (!scrapAssetObj) {
      return res.status(404).send('Asset not found');
    }
    await scrapAssetObj.update({
      assetType,
      serialNumber,
      modelNumber,
      purchaseDate,
      warrantyExpires,
    });
    res.json(scrapAssetObj);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

const deleteScrapAsset = async (req, res) => {
  const { id } = req.params;
  try {
    const scrapAssetObj = await scrapAsset.findByPk(id);
    if (!scrapAssetObj) {
      return res.status(404).send('Asset not found');
    }
    await scrapAssetObj.destroy();
    res.json({ message: 'Asset deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getAllScrapAssets,
  createScrapAsset,
  updateScrapAsset,
  deleteScrapAsset,
};
