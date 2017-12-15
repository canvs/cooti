const express    = require('express');
const template   = require('art-template');
const path       = require('path');
const session    = require('express-session');//session 中间件
const mongoStore = require('connect-mongo')(session);//将 session 存储于 mongodb，结合 express-session 使用
const flash      = require('connect-flash');//页面通知提示的中间件，基于 session 实现
const bodyParser = require('body-parser');

const home       = require('./router/home.js');
const about      = require('./router/about.js');
const me         = require('./router/me.js');
const signup     = require('./router/signup.js');
const signin     = require('./router/signin.js');
const library     = require('./router/library.js');
const picture     = require('./router/picture.js');
const config     = require('./config.js');

const app        = express();
//静态文件目录，
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended:true})); // for parsing application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname,'static')));
template.config('extname', '.html');

app.engine('.html', template.__express);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
//中间件处理是否登陆
// app.get('/'),(req,res)=>{
//     res.redirect('/posts');
// }

//session 配置
app.use(session({
    name: config.session.key,
    secret: config.session.secret,
    cookie:{
        maxAge: config.session.maxAge
    },
    store: new mongoStore({

        url: config.mongodb
    })
}))
// flash 中间价，用来显示通知
app.use(flash());

// set flash
app.use(function (req, res, next) {
    // res.locals.user = req.session.user;
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
});

app.use( (err,req,res,next)=>{//404处理
    if (err) {
        res.send('err.message');
        res.status(500).send('not Find');     
    }
   
})

app.use('/',home);
app.use('/about',about);
app.use('/me',me);
app.use('/signup',signup);
app.use('/signin',signin);
app.use('/picture',picture);
app.use('/library',library);

app.listen(config.port,()=>{
    console.log(`servers start ---listen on port${config.port}`);
});