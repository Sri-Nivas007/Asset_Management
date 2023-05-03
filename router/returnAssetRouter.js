const express = require('express');
const router = express.Router();
const {
  getReturnAssets,
  createReturnAsset,
  updateReturnAsset,
  deleteReturnAsset,
} = require('../controllers/returnAsset.controllers');
const { VerifyToken } = require('../auth/jwt');

// GET /api/return-assets
router.get('/returnAsset',VerifyToken, getReturnAssets);

// POST /api/return-assets
router.post('/returnAsset',VerifyToken, createReturnAsset);

// PUT /api/return-assets/:id
router.put('/returnAsset/:id',VerifyToken, updateReturnAsset);

// DELETE /api/return-assets/:id
router.delete('/returnAsset/:id',VerifyToken, deleteReturnAsset);

module.exports = router;
