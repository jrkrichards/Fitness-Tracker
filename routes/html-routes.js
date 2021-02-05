// Setting up variables
const express = require("express");
const router = express.Router();
const path = require("path");

// Requiring model to query database
const db = require("../model/fitness");

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

module.exports = router;