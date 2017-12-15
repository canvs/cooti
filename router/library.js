const express     = require('express');
const template    = require('art-template');

const app         = express();
const router      = express.Router();
var data = {
    title : '实验室'
}
router.get('/',(req,res)=>{

    res.render('../views/library',data);
})

module.exports = router;
