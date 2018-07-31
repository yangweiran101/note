const express = require('express');
const router = express.Router();
const users = require('../database/models/users');

router.post('/Upload',(req,res) =>{

    res.json({
        data:req.body
    })
})

router.post('/Update',(req,res) =>{
    let {email,password,newpassword,headpic} = req.body;
    users.find({email}).then(data =>{

        if(password == data[0].password){
            users.findOneAndUpdate({email:email},{$set:{password:newpassword,headpic}}).then(data =>{
                console.log(data);
                res.json({
                        code:200,
                        data,
                        msg:'个人信息修改成功'
                    })
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