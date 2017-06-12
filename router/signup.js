const express     = require('express');
const template    = require('art-template');
const sha1        = require('sha1');

const app         = express();
const router      = express.Router();
const data = {};

// let ALD_SINGN = require('/server/server.js').checkNotLogin;//中间件检测是否已经登陆了
const UserModel = require('../mongo/model.js');
// UserModel.find({}).then(e=>{
//                 console.log(e);
//             })
router.get('/',(req,res,next)=>{
    // res.send('你好');
    res.render('../views/signup');
})

router.post('/',(req,res,next)=>{
    // res.send(req.flash());
    console.log(req.body);
    let name = req.body.name;
    let email  = req.body.email;
    let password = req.body.password;
    let repasswprd = req.body.repassword;
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
            console.log(result);
            user = result;
            delete user.password;
            res.status(200);
            req.flash('success','注册成功');
            req.session.user = user;
            res.redirect('/me');
        })
        .catch(e =>{
            // console.log(e);
            // res.status(500);
            if (e.message.match('E11000 duplicate key')) {
                req.flash('error', '用户名已被占用');
                // return res.redirect('/signup');
            }else {
                return res.redirect('/signup');
            }
            next(e);
        })


})

module.exports = router;
