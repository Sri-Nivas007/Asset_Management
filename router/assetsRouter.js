const express = require('express');
const router = express.Router();
const {
  createAsset,
  updateAsset,
  deleteAsset,
} = require('../controllers/asset.controllers');
const { VerifyToken } = require('../auth/jwt');


router.post('/assets',VerifyToken, createAsset);

// Update an existing asset
router.put('/assets/:id',VerifyToken, updateAsset);

// Delete an asset
router.delete('/assets/:id',VerifyToken, deleteAsset);

module.exports = router;
