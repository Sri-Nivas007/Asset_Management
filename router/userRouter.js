const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  register,
  updateUser,
  logIn,
} = require('../controllers/user.controller.js');
const { VerifyToken } = require('../auth/jwt.js');

// Get all users
router.get('/users',VerifyToken ,getAllUsers);

// Register a new user
router.post('/register', register);

// Update an existing user
router.put('/user/:id',VerifyToken, updateUser);

// Login
router.post('/login', logIn);

module.exports = router;
