const express   = require('express');
const template  = require('art-template');
const router    = express.Router();

const data = {
    title:"个人信息",
    time:(new Date).toString(),
    itemList:[{
        name:'请叫我英雄',
        id:0,
        descript:'我是英雄'

    },{
        name:'冻鱼',
        id:1,
        descript:'东隅已逝'
    }]
}

router.get('/',(req,res)=>{
    
    res.render('../views/main',data);
})

module.exports = router;