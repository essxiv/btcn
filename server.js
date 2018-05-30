var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var information = require('./models/information');
var bodyParser = require('body-parser');
var logger = require('morgan');

var favicon = require('serve-favicon');

var app = express();
var port = process.env.PORT || 8081;    

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/apidb');
const db = require('./db/config');

app.use(favicon(path.join(__dirname, './client/styles/img/favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static('bower_components'));
// app.use("/client", express.static());
app.use(express.static(path.resolve(__dirname, '.', 'client')));
app.use(express.static(path.resolve(__dirname, '.', 'node_modules')));

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Access-Token,X-Key")
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
})

app.get('/', function(req, res) {
    res.sendFile('/client/login.html', { root: __dirname });
})

app.get('/token', function(req, res) {
    res.sendFile('/client/token.html', { root: __dirname });
})

app.all('/api/* ', [require('./middlewares/validateRequest')]);

// app.use('/', require('./routes/v1_routes'));

// Routes:
var root_routes = require('./routes/v1_routes');
var info = require('./routes/info');

root_routes(app);
info(app);

app.use(function(req, res, next) {
    var err = new Error('Express: Page Not Found 404;');
    err.status = 404;
    next(err);
})

app.listen(port);

console.log('api: ' + port);

