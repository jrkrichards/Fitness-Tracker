// Setting up variables
const express = require("express");
const router = express.Router();

// Requiring model to query database
const db = require("../model/fitness");

router.get('/api/workouts', (req, res) => {
    db.find({}, (error, data) => {
        if(error) {
            res.send(error)
        } else {
            res.send(data)
        }
    })
});

module.exports = router;