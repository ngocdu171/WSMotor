const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM tbl_catalog')
    .then(results => {
        res.json(results);
    })
})

module.exports = router;