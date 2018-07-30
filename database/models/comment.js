var mongoose = require('mongoose');


var comment = new mongoose.Schema({
    username:{
        type:String,
    },
    content:{
        type:String
    },
    article:{
        type:String
    },

},{timestamp: {createdAt: 'createTime', updatedAt: 'updateTime'}});

module.exports = mongoose.model('comment',comment)