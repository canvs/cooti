let userControl = require('./model');
// let userControl = mongooles.module('',cootiSchema);

module.exports = {
  // 注册一个用户
    create: function create(user) {
        return userControl.save(user);
    },
    find: function find(obj) {
        return userControl.find(obj);
    }
};
