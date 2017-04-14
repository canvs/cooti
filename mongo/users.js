var User = require('./model').User;

module.exports = {
  // 注册一个用户
    create: function create(user) {
        return User.create(user).exec();
    }
};
