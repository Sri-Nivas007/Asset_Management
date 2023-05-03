const express = require('express');
const { getAllScrapAssets, createScrapAsset, updateScrapAsset, deleteScrapAsset } = require('../controllers/scrapAsset.controllers');
const { VerifyToken } = require('../auth/jwt');
const router = express.Router();

router.get('/scrapAssets',VerifyToken, getAllScrapAssets);
router.post('/scrapAssets',VerifyToken, createScrapAsset);
router.put('/scrapAssets/:id',VerifyToken, updateScrapAsset);
router.delete('/scrapAssets/:id',VerifyToken, deleteScrapAsset);

module.exports = router;
