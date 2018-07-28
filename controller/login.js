const express = require('express');
const router = express.Router();
const users = require('../database/models/users');

router.post('/login',(req,res) => {
    let {email,password} = req.body;
    users.findOne({email}).then(data => {
        console.log(data)
        if(data){
            if(password == data.password){
                req.session.users = data;
                let usermsg ={
                    username:data.username,
                    email:data.email
                }
                res.json({
                    code:200,
                    data:usermsg,
                    msg:'登陆成功'
                })
            }else if(password != data.password){
                res.json({
                    code:401,
                    msg:'密码错误'
                })
            }
        }else{
            res.json({
                code:401,
                msg:'该用户尚未注册'
            })
        }

    })
});
router.get('/autologin',(req,res) => {
    if(req.session.users){
        res.json({
            code:200,
            msg:"您已登陆"
        })
    }
})


module.exports = router;