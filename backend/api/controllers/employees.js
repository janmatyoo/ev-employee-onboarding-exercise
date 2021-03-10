const fs = require('fs');
const util = require('util');

function getData() {
    let rawdata = fs.readFileSync('employees.json');
    return JSON.parse(rawdata);
}

exports.getAllEmployees = (req, res, next) => {
    let employees = getData()
    res.status(200).json(employees);
}

exports.getSpecificEmployee = (req, res, next) => {
    let id = req.params.id

    let employees = getData()
    let employee = employees.find(item=>item.id==id);

    if (employee != null) {
        res.status(200).json(employee);
    }
    else {
        res.status(404).json({
            message: "Employee not found"
        });
    }
}

exports.add_new_employee = (req, res, next) => {
    res.status(200).json({
        message: "Added employee"
    });
}

exports.update_selected_employee = (req, res, next) => {
    res.status(200).json({
        message: "Updated employee"
    });
}

exports.delete_selected_employee = (req, res, next) => {
    res.status(200).json({
        message: "Deleted employee"
    });
}