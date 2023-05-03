const express = require('express');
const {
  getAllAssetIssues,
  getAssetIssueById,
  createAssetIssue,
  updateAssetIssue,
  deleteAssetIssue,
} = require('../controllers/assetIssue.controllers');
const { VerifyToken } = require('../auth/jwt');
const router = express.Router();

router.get('/assetIssue',VerifyToken, getAllAssetIssues);

// Get a single asset issue by ID
router.get('/assetIssue/:id',VerifyToken, getAssetIssueById);

// Create a new asset issue
router.post('/assetIssue',VerifyToken, createAssetIssue);

// Update an existing asset issue by ID
router.put('/assetIssue/:id',VerifyToken, updateAssetIssue);

// Delete an existing asset issue by ID
router.delete('/assetIssue/:id',VerifyToken, deleteAssetIssue);

module.exports = router;
