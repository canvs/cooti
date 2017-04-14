const Mongolass = require('mongolass');

const DB_CNC_STR = 'mongodb://localhost:27017/cooti';

let mongolass = new Mongolass();
mongolass.connect(DB_CNC_STR);

// db.connection.on('error',(error)=>{
//     console.log(error);
// })

// db.connection.on('open',()=>{
//     console.log("数据库链接成功");
// })

exports.User = mongolass.model('User',{
    name:{type:'string'},
    password:{type:'string'},
    email:{type:'string'}
})
exports.User.index({name:1},{unique:true}).exec();//用户名全局唯一