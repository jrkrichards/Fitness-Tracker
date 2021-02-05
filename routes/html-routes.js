// Requiring path to so we can use relative routes to our HTML files
const express = require("express");
const router = express.Router();
const path = require("path");

// Requiring models to query database
const db = require("../model");

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

module.exports = router;