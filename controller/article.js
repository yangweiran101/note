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
        })
    }else{
        res.json({
            code:401,
            msg:'文章添加失败'
        })
    }

})
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