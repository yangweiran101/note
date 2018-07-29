const express = require('express');
const router = express.Router();
const article = require('../database/models/article');

router.post('/addArticle',(req,res) =>{
    let {id,pic,title,content} = req.body;
    if(id&&id.trim()!=''&&pic&&pic.trim()!=''&&title&&content){
        article.create({id,pic,title,content}).then(data =>{
            res.json({
                code:200,
                msg:'文章添加成功'
            })
        }).catch(err =>{
            res.json({
                code:401,
                msg:'id重复，提交失败'
            })
        })
    }else{
        res.json({
            code:401,
            msg:'文章添加失败'
        })
    }

})


router.post('/getArticleDetail',(req,res) =>{
    let {id} = req.body
    article.find({id}).then(data => {
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
})
module.exports = router;