const express = require('express');
const router = express.Router();
const users = require('../database/models/users');
const isEmail = require( 'validator/lib/isEmail');

router.post('/note',(req,res) =>{
    let {username,email,password}=req.body;
    if(isEmail(email)&&email&&password&&password.trim()!= ''&&username&&username.trim()!=''&&username != password){
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
    }else if(isEmail(email) == false&&username !=''&&username.trim() !=''&&username!=password){
        res.json({
            code:401,
            msg:'请输入正确的邮箱'
        })
    }else if(password==''&&password.trim()==''){
        res.json({
            code:401,
            msg:'密码不能为空或者空格'
        })
    }else if(username == password){
        res.json({
            code:401,
            msg:'密码不能与用户名相同'
        })
    }else if(username == ''&&username.trim() ==''){
        res.json({
            code:401,
            msg:'用户名不能为空'
        })
    }else{
        res.json({
            code:401,
            msg:'信息错误，注册失败'
        })
    }


})

module.exports = router;