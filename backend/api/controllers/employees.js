const fs = require('fs');
const util = require('util');

function getData() {
    let rawdata = fs.readFileSync('employees.json');
    return JSON.parse(rawdata);
}

function writeData(data) {
    let newData = JSON.stringify(data, null, "\t");
    fs.writeFileSync('employees.json', newData);
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

exports.addNewEmployee = (req, res, next) => {
    let newEmployee = {
        id: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }

    let employees = getData()
    employees.push(newEmployee);
    writeData(employees)

    res.status(201).json({
        message: util.format("Successfully added employee %s %s", newEmployee.first_name, newEmployee.last_name)
    });
}

exports.updateSelectedEmployee = (req, res, next) => {
    let id = req.params.id

    let updatedEmployee = {
        id: parseInt(id),
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }

    let employees = getData()
    let employeeToDelete = employees.find(item=>item.id==id);
    let dataRemoved = employees.filter((el) => {
        return el.id !== parseInt(id);
    });
    dataRemoved.push(updatedEmployee);
    writeData(dataRemoved)

    res.status(200).json({
        message: util.format("Successfully updated employee %s %s", updatedEmployee.first_name, updatedEmployee.last_name)
    });
}

exports.delete_selected_employee = (req, res, next) => {
    res.status(200).json({
        message: "Deleted employee"
    });
}