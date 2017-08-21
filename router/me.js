const express     = require('express');
const template    = require('art-template');

const app         = express();
const router      = express.Router();

let datas         = require('../static/steam/resume.json');

router.get('/',(req,res)=>{

    res.render('../views/me',datas);
})

module.exports = router;
