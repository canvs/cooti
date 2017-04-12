const express     = require('express');
const template    = require('art-template');
const mongodb     = require('mongodb');
const mongoose    = require('mongoose');
const mongoClient = mongodb.MongoClient;
const app         = express();
const router      = express.Router();


// const DB_CONN_STR = 'mongodb://localhost:27017/cooti';

const monthJX = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
const image   = ['star','people'];
let timeTm    = new Date();
let monthly   = monthJX[timeTm.getMonth()].split("");
let random    = '/image/4.png' //parseInt(Math.floor(Math.random()*10)+1)+'.png';

const data = {
    title:"东隅",
    time:(new Date).toString(),
    monthly:monthly,
    image:random,
    itemList:[{
        name:'请叫我英雄',
        id:0,
        descript:'我是英雄'

    }]
}
// mongoClient.connect(DB_CONN_STR,(err,db)=>{

//     console.log('链接成功');
// })
router.get('/',(req,res)=>{
    
    res.render('../views/home',data);
})

module.exports = router;