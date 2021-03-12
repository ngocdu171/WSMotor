const express = require('express');
const router = express.Router();
const Product = require('../models/ProductModel');

router.get('/', async (req, res) => {
    await Product.find({}, (err, results) => {
        if(err) {
            console.log(err);
        }
        else {
            res.json(results)
        }
    })
});

router.get('/:idProduct', async (req, res) => {
    const item = await Product.find({idProduct: req.params.idProduct})
        if(item.length === 0) {
            res.json({message: "No result"})
        }
        else {
            res.json(item);
        }
});

router.post('/addProduct', (req, res) => {
    const item = new Product({
        idProduct: req.body.idProduct,
        nameProduct: req.body.nameProduct,
        amountProduct:req.body.amountProduct,
        S:req.body.S,
        M:req.body.M,
        L:req.body.L,
        imgProduct:req.body.idProduct,
        priceProduct: req.body.priceProduct,
        desProduct: req.body.desProduct,
        idCat: req.body.idCat,
        showHide: req.body.showHide,
        views: req.body.views
    })
    item.save()
    .then(results => {
        console.log(results);
        res.json({message: "create success!"})
    })
    .catch(err => {
        res.json(err);
    })
});

router.put('/:idProduct', (req, res) => {
    res.json({message: "route update"});
})
///////delete/////
router.delete('/:idProduct', async (req, res) => {
    await Product.remove({idProduct: req.params.idProduct})
    .then(results => {
        res.json(results);
    })
    .catch(err => {
        res.json({err});
    })
})

module.exports = router;