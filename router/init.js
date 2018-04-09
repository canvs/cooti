const express     = require('express');
const template    = require('art-template');

const app         = express();
const router      = express.Router();

var data  = {
	title: '我的资料'
}
router.get('/',(req,res)=>{
    res.render('../views/init',data);
});

module.exports = router;