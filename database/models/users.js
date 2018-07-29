var mongoose = require('mongoose');


var users = new mongoose.Schema({
    username:  String,
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    } ,
    headpic:{
        type:String
    }
});

module.exports = mongoose.model('users',users,"users")

