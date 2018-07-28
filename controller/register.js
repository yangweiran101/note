const express = require('express');
const router = express.Router();
const users = require('../database/models/users')

router.post('/note',(req,res) =>{
    let {username,email,password}=req.body;
    console.log(req.body)
    users.create({username,email,password}).then(data => {
        res.json({
            code:200,
            msg:'注册成功'
        })
    }).catch(err =>{
        console.log(err)
        res.json({
            code:401,
            msg:'该邮箱已经注册'
        })
    })

})

module.exports = router;