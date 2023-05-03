const express = require('express');
const {
  getAllAssetCategories,
  getAssetCategoryById,
  createAssetCategory,
  updateAssetCategory,
  deleteAssetCategory,
} = require('../controllers/assetCategory.controllers');
const { VerifyToken } = require('../auth/jwt');
const router = express.Router();

router.get('/assetCategory', VerifyToken, getAllAssetCategories);

// Get a single asset category by id
router.get('/assetCategory/:id', VerifyToken, getAssetCategoryById);

// Create a new asset category
router.post('/assetCategory', VerifyToken, createAssetCategory);

// Update an existing asset category
router.put('/assetCategory/:id', VerifyToken, updateAssetCategory);

// Delete an existing asset category
router.delete('/assetCategory/:id', VerifyToken, deleteAssetCategory);

module.exports = router;
