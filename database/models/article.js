var mongoose = require('mongoose');


var article = new mongoose.Schema({
    id:{
        type:Number,
        unique:true
    },
    pic:{
        type:String
    },
    title:{
        type:String
    },
    content:{
        type:String
    },
});

module.exports = mongoose.model('article',article)
