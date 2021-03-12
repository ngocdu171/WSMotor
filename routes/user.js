const express = require('express');
const router = express.Router();
// const db = require('../config/connection');
const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');

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

router.post('/register', async (req, res) =>{
    const saltRounds = 4;
    const passwordHash = await bcrypt.hash(req.body.password, saltRounds)
    const user = new User({
        idUser: req.body.idUser,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        password: passwordHash,
        phone: req.body.phone,
        address: req.body.address
    })
    
    await user.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
});


module.exports = router;