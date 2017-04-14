const express     = require('express');
const template    = require('art-template');
const sha1        = require('sha1');

const app         = express();
const router      = express.Router();
const data = {};

// let ALD_SINGN = require('/server/server.js').checkNotLogin;//中间件检测是否已经登陆了
const UserModel = require('../mongo/users.js');

router.get('/',(req,res,next)=>{
    // res.send('你好');
    res.render('../views/signup');
})

router.post('/',(req,res,next)=>{
    // res.send(req.flash());
    let name = req.fields.name;
    let email  = req.fields.email;
    let password = req.fields.password;
    let repasswprd = req.fields.repassword;
    try {

    }catch(e) {
        return res.redirect('/signup');
    }
    password = sha1(password);
    var user = {
        name:name,
        password:password,
        email:email
    };
    UserModel.create(user)
        .then(result =>{
            req.flash('success','注册成功');
            res.redirect('/');
        }).catch(e =>{
            if (e.message.match('E11000 duplicate key')) {
                req.flash('error', '用户名已被占用');
                return res.redirect('/signup');
            }
            next(e);
        })


})

module.exports = router;
