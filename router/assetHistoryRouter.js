const express = require('express');
const router = express.Router();
const {
  getAllAssets,
  createAsset,
  updateAsset,
  deleteAsset,
} = require('../controllers/assetHistory.controllers');
const { VerifyToken } = require('../auth/jwt');

router.get('/assetHistory', VerifyToken, getAllAssets);

// Create a new asset issue
router.post('/assetHistory', VerifyToken, createAsset);

// Update an existing asset issue by ID
router.put('/assetHistory/:id', VerifyToken, updateAsset);

// Delete an existing asset issue by ID
router.delete('/assetHistory/:id', VerifyToken, deleteAsset);

module.exports = {
  getAllAssets,
  createAsset,
  updateAsset,
  deleteAsset,
};

module.exports = router;
