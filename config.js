module.exports = {
    port: 3000,
    session: {
        secret: 'cooti.cn',
        key:'cooti.cn',
        maxAge:2592000000
    },
    mongodb:'mongodb://localhost:27017/cooti'
}