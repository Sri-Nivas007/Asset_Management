const db = require('../database/models/index.js');
const AssetCategory = db.assetcategories;

const getAllAssetCategories = async (req, res) => {
  try {
    const assetCategories = await AssetCategory.findAll();
    res.status(200).json(assetCategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single asset category
const getAssetCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const assetCategory = await AssetCategory.findOne({ where: { id } });

    if (!assetCategory) {
      return res
        .status(404)
        .json({ message: `Asset category with id ${id} not found` });
    }

    res.status(200).json(assetCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new asset category
const createAssetCategory = async (req, res) => {
  const { name, description } = req.body;

  try {
    const assetCategory = await AssetCategory.create({ name, description });

    res.status(201).json(assetCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an existing asset category
const updateAssetCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const assetCategory = await AssetCategory.findOne({ where: { id } });

    if (!assetCategory) {
      return res
        .status(404)
        .json({ message: `Asset category with id ${id} not found` });
    }

    await AssetCategory.update({ name, description }, { where: { id } });

    res
      .status(200)
      .json({ message: `Asset category with id ${id} updated successfully` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an existing asset category
const deleteAssetCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const assetCategory = await AssetCategory.findOne({ where: { id } });

    if (!assetCategory) {
      return res
        .status(404)
        .json({ message: `Asset category with id ${id} not found` });
    }

    await AssetCategory.destroy({ where: { id } });

    res
      .status(200)
      .json({ message: `Asset category with id ${id} deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllAssetCategories,
  getAssetCategoryById,
  createAssetCategory,
  updateAssetCategory,
  deleteAssetCategory,
};
