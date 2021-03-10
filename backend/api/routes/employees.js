const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employees');

router.get('/', EmployeeController.get_all_employees);

router.get('/:id', EmployeeController.get_specific_employee);

router.post('/', EmployeeController.add_new_employee);

router.put('/:id', EmployeeController.update_selected_employee);

router.delete('/:id', EmployeeController.delete_selected_employee);

module.exports = router