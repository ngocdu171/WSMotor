const express = require('express');
const router = express.Router();
const Product = require('../models/ProductModel');

//GET BACK ALL PRODUCTS
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

//GET NEW PORDUCT
router.get('/newProducts', async (req, res) => {
    await Product.find().sort({dateUpdate: -1}).limit(7)
    .then(results => {
        res.json(results)
    })
    .catch(err => {
        res.json(err);
    })
})

//GET PRODUCT BY IDPRODUCT//
router.get('/:idProduct', async (req, res) => {
    const item = await Product.find({idProduct: req.params.idProduct})
        if(item.length === 0) {
            res.json({message: "No result"})
        }
        else {
            res.json(item);
        }
});

//CREATE NEW PRODUCT
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

//UPDATE PRODUCT'S INFORMATION////////dua theo id cua mongodb
router.put('/:idProduct', async (req, res) => {
    const newInfo = {
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
    }
    await Product.findByIdAndUpdate(req.params.idProduct, newInfo)
    .then(results => {
        res.json(results);
        console.log("update success!");
    })
    .catch(err => {
        res.json({err});
    })
});

//DELETE PRODUCT BY IDPRODUCT
router.delete('/:idProduct', async (req, res) => {
    await Product.remove({idProduct: req.params.idProduct})
    .then(results => {
        res.json(results);
    })
    .catch(err => {
        res.json({err});
    })
});

module.exports = router;