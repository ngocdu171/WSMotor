const express = require('express');
const router = express.Router();
// const db = require('../config/connection');
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM tbl_product ')
    .then(results => {
        res.json(results);
        res.status(200);
    })
    .catch(error => {
        console.log(error);
        res.status(500);
    })
    // res.status(200).json(result);
})

router.get('/:idproduct', (req, res) => {
    db.query('SELECT * FROM tbl_product where idProduct = ?', [req.params.idproduct])
    .then(results => {
        res.json(results);
        res.status(200);
    })
    .catch(error => {
        console.error(error);
        res.status(500);
    })
})

router.post('/', (req, res) => {
    res.send(req.body);
    console.log(req.body);
})

module.exports = router;