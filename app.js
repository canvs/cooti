const express   = require('express');
const template  = require('art-template');
const path      = require('path');
const app       = express();
const indexRouter    = require('./router/index.js');

//静态文件目录，
app.use(express.static(path.join(__dirname,'/static')));
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use('/',indexRouter);
app.listen(2002);