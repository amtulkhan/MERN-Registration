const express = require("express");
const router = express.Router();
const signUp = require("../Models/signUpModel");


router.post('/signup',(req, res) => {
    const signedUser = new signUp({
        FullName: req.body.FullName,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password

    })

    signedUser.save()
        .then(data => { res.json(data) })
        .catch(error=>{res.json(error)})
});


module.exports = router