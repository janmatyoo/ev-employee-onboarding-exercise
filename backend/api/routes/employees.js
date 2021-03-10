const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employees');

router.get('/', EmployeeController.getAllEmployees);

router.get('/:id', EmployeeController.getSpecificEmployee);

router.post('/', EmployeeController.addNewEmployee);

router.put('/:id', EmployeeController.updateSelectedEmployee);

router.delete('/:id', EmployeeController.delete_selected_employee);

module.exports = router