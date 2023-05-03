const express = require('express');
const router = express.Router();
const {
  createStock,
  findAllStock,
  findOneStock,
  updateStock,
  deleteStock,
} = require('../controllers/stockViews.controllers');
const { VerifyToken } = require('../auth/jwt');

router.post('/stockView',VerifyToken, createStock);
router.get('/stockView',VerifyToken, findAllStock);
router.get('/stockView/:id',VerifyToken, findOneStock);
router.put('/stockView/:id',VerifyToken, updateStock);
router.delete('/stockView/:id',VerifyToken,deleteStock);

module.exports = router;
