const mongoose = require("mongoose");

const SignupTemplate = new mongoose.Schema({
    Fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:Date.now
    }
})


module.exports = mongoose.model('userTable',SignupTemplate);