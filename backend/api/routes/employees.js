const express = require('express');
const fs = require('fs');
const util = require('util');
const router = express.Router();

router.get('/', (req, res, next) => {
    let rawdata = fs.readFileSync('employees.json');
    let employees = JSON.parse(rawdata);

    res.status(200).json(employees);
});

router.get('/:id', (req, res, next) => {
    let id = req.params.id

    let rawdata = fs.readFileSync('employees.json');
    let employees = JSON.parse(rawdata);
    let employee = employees.find(item=>item.id==id);

    if (employee != null) {
        res.status(200).json(employee);
    }
    else {
        res.status(404).json({
            message: "Employee not found"
        });
    }
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Added employee"
    });
});

router.put('/:id', (req, res, next) => {
    res.status(200).json({
        message: "Updated employee"
    });
});

router.delete('/:id', (req, res, next) => {
    ees.status(200).json({
        message: "Deleted employee"
    });
});

module.exports = router