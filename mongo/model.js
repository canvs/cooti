const mongoose = require('mongoose');
// const config = require('./config.js');
// console.log(config);

const DB_CNC_STR = 'mongodb://localhost:27017/cooti';

mongoose.connect(DB_CNC_STR);

let db = mongoose.connection;


db.on('error',(error)=>{
    console.log(error);
})

db.on('open',()=>{
    console.log("数据库链接成功");
})

let cootiSchema = mongoose.Schema({
    name: { type: String, unique: true},
    email: String,
    password: String
})

// module.exports = mongoose.model('user',cootiSchema);
let User = mongoose.model('User',cootiSchema);

module.exports = {
  // 注册一个用户
    create: function create(user) {
        let data = new User(user);//save为model的实例方法，索要new User
        return data.save(data);
    },
    find: function find(obj) {
        return User.find(obj);
    }
};
