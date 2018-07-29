const express = require('express');
const router = express.Router();
const users = require('../database/models/users');


router.post('/Update',(req,res) =>{
    let {email,password,newpassword,headpic} = req.body;
    users.find({email}).then(data =>{

        if(password == data[0].password){
            users.update({email:email},{password:newpassword},(err,docs) =>{
                if(err){
                    console.log(err)
                } else{
                    res.json({
                        code:200,
                        msg:'修改成功'
                    })
                }

            })
        }else{
            res.json({
                code:401,
                msg:'原密码错误，无法修改'
            })
        }

    })
})


module.exports = router;