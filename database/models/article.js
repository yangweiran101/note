var mongoose = require('mongoose');


var article = new mongoose.Schema({
    username:{
        type:String,
    },
    userpic:{
        type:String
    },
    pic:{
        type:String
    },
    title:{
        type:String
    },
    content:{
        type:String
    }
},{timestamp: {createdAt: 'createTime', updatedAt: 'updateTime'}});

module.exports = mongoose.model('article',article)
