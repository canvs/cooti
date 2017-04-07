const express = require('express');
const cooti = express();

cooti.get('/',(req,res)=>{
    res.send('你好');
})
cooti.listen(3000);