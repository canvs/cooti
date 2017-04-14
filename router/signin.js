const express         = require('express');
const template        = require('art-template');

const app         = express();
const router      = express.Router();
const data = {};

// let ALD_SINGN = require('/server/server.js').checkNotLogin;//中间件检测是否已经登陆了

router.get('/',(req,res,next)=>{
    res.send(req.flash());
    // res.render('../views/signin',data);
})

router.post('/',(req,res,next)=>{
    res.render('../views/signin',data);
    // res.send(req.flash());
})

module.exports = router;
