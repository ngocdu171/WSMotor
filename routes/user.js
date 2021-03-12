const express = require('express');
const router = express.Router();
// const db = require('../config/connection');
const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');

router.get('/', async (req, res) => {
    await User.find({}, function(err, results){
        if(err){
            console.log(err);
        }
        else{
            res.json(results);
        }
    })
});

router.post('/register', async (req, res) =>{
    const emailFind = await User.find({email: req.body.email});
    if(emailFind.length > 0) {
        res.json({message: "email existed!!!!"});
    }
    else {
        const saltRounds = 4;
        const passwordHash = await bcrypt.hash(req.body.password, saltRounds);
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
        user.save()
        .then(data => {
            console.log(data);
            res.json({message: "register success!"});
        })
        .catch(err => {
            res.json({message: err})
        })
    }
});

router.get('/login', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if(username && password) {
        const user = await User.find({username: username});
        if(user.length > 0) {
            await bcrypt.compare(password, user[0].password)
            .then(results => {
                if(results === true) {
                    res.json({message: "login successfully!"});
                    console.log(user);
                }
                else {
                    res.json({message: "password does not match!!!!"});
                }
            })
        }
        else {
            res.json({message: "username doesn't exist!"})
        }
    }
    else {
        res.send("fill the fields!");
    }
})


module.exports = router;