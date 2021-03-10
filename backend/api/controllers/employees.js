const fs = require('fs');
const util = require('util');

exports.get_all_employees = (req, res, next) => {
    let rawdata = fs.readFileSync('employees.json');
    let employees = JSON.parse(rawdata);

    res.status(200).json(employees);
}

exports.get_specific_employee = (req, res, next) => {
    res.status(200).json({
        message: "List specific employee"
    });
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