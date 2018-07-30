const express = require('express');
const router = express.Router();
const article = require('../database/models/article');

router.post('/addArticle',(req,res) =>{
    let {username,userpic,pic,title,content} = req.body;
    if(username&&userpic&&title&&content){
        article.create({
            username,
            userpic,
            pic,
            title,
            content,
            // id
        }).then(data =>{
            res.json({
                code:200,
                msg:'文章添加成功'
            })
        }).catch(err =>{
            res.json({
                code:401,
                msg:'提交失败'
            })
        })
    }else{
        res.json({
            code:401,
            msg:'文章缺少标题或内容，添加失败'
        })
    }

});

router.post('/getArticleDetail',(req,res) =>{
    let {_id} = req.body
    article.find({_id}).then(data => {
        console.log(data);
        res.json({
            code:200,
            data,
            msg:'获取文章详情成功！'
        })
    })
});

router.get('/getArticle',(req,res) =>{
    article.find().then(data => {
        res.json({
            code:200,
            data,
            msg:'获取文章成功！'
        })
    })
});

router.get('/getSezrch',(req,res) =>{
    let keyword = req.query
    let reg = new RegExp(`${keyword}`)
    console.log(reg);
    article.find({title:reg}).then(data =>{
        res.json({
            code:200,
            data,
            msg:'获取文章成功'
        })


    })
})
module.exports = router;