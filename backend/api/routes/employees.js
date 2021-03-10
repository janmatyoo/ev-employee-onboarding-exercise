const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employees');

router.get('/', EmployeeController.getAllEmployees);

router.get('/:id', EmployeeController.getSpecificEmployee);

router.post('/', EmployeeController.addNewEmployee);

router.put('/:id', EmployeeController.updateSelectedEmployee);

router.delete('/:id', EmployeeController.deleteSelectedEmployee);

module.exports = router