var express = require('express');
const mongoose = require('mongoose')
const Course = require('../models/course')
const { body, validationResult, trim } = require('express-validator');
const helper = require('./searchHelper');

var router = express.Router();

const searchHelper = (input) => {
    let result = helper.generateMatch(input);
    Course
    .aggregate([
        result
    ]
    )
    .exec()
    .then(docs => {
        console.log(docs)

    })
    .catch(err => {
        console.log(err);
    });
}

const executeSearch = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const input = helper.processInput(req);
    //  input - {searchString: <course name all caps>, years: ["100", "200", "300"], ratings: ["1", "2"]}
    searchHelper(input);
    res.status(200).json('inside search');
}

router.get('/', [
    body('searchString').trim().escape(),
    body('years').trim().escape(),
    body('ratings').trim().escape(),
], executeSearch);

module.exports = router;