const express = require('express');
const router = express.Router();
const comment = require('../database/models/comment');
//5b5e7412475a5d45447ed2a6
router.post('/addComment',(req,res) => {
    let {username,content,article} = req.body;
    comment.create({
        username,
        content,
        article
    }).then(data =>{
        res.json({
            code:200,
            data,
            msg:'评论提交成功'
        })
    }).catch(err =>{
        res.json({
            code:401,
            msg:'评论提交失败'
        })
    })
});

router.get('/getComment',(req,res) => {
    let article = req.query.article;
    comment.find({article:article}).then(data => {
        res.json({
            code:200,
            data,
            msg:'获取评论列表成功'
        })
    }).catch(err => {
        res.json({
            code:401,
            msg:'获取评论列表失败'
        })
    })
})

module.exports = router;