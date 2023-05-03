const express = require('express');
const router = express.Router();


const {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
  } = require('../controllers/employee.controllers.js');
const { VerifyToken } = require('../auth/jwt.js');


router.get('/employees',VerifyToken, getAllEmployees);
router.get('/employees/:id',VerifyToken,getEmployeeById);
router.post('/employees',VerifyToken,createEmployee);
router.put('/employees/:id',VerifyToken, updateEmployee);
router.delete('/employees/:id',VerifyToken, deleteEmployee);

module.exports = router;