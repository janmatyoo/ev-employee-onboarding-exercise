const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "List all employees"
    });
});

router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: "List specific employee"
    });
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