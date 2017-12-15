const express     = require('express');
const template    = require('art-template');

const app         = express();
const router      = express.Router();

let datas = {};

router.get('/',(req,res)=>{

    res.render('../views/picture',datas);
})

module.exports = router;
