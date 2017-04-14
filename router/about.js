const express     = require('express');
const template    = require('art-template');

const app         = express();
const router      = express.Router();

router.get('/',(req,res)=>{
    res.send('你好');
    // res.render('../views/about',data);
})

module.exports = router;