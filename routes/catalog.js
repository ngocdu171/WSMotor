const express = require('express');
const router = express.Router();
const Catalog = require('../models/CatalogModel');

// GET BACK ALL CATALOG
router.get('/', async (req, res) => {
    //res.send("this is catalog route");
    await Catalog.find()
    .then(results => {
        res.json(results);
    })
    .catch(err => {
        res.json(err);
    })
})

//GET CATALOG BY NAME
router.get('/getbyName/:nameCat', async (req, res) => {
    await Catalog.find({nameCat: req.params.nameCat})
    .then(results => {
        if(results.length > 0) {
            res.json(results);
        }
        else {
            res.json({message: "No Results!"});
        }
    })
    .catch(err => {
        res.json(err);
    })
})

//GET CATALOG BY IDCAT
router.get('/getbyId/:idCat', async (req, res) => {
    await Catalog.find({idCat: req.params.idCat})
    .then(results => {
        if(results.length > 0) {
            res.json(results);
        }
        else {
            res.json({message: "No Results!"});
        }
    })
    .catch(err => {
        res.json(err);
    })
})

module.exports = router;