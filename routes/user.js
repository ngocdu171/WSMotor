const express = require('express');
const router = express.Router();
const db = require('../config/connection');
const User = require('../models/UserModel');

router.get('/', (req, res) => {
    User.find({}, function(err, results){
        if(err){
            console.log(err);
        }
        else{
            res.json(results);
        }
    })
});

router.post('/register', (req, res) =>{
    const user = new User({
        idUser: req.body.idUser,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        phone: req.body.phone,
        address: req.body.address
    })
    
    user.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
});


module.exports = router;