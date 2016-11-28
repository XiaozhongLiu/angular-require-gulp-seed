var express = require('express');
var config = require('./config');
var ejs = require('ejs-mate');
var app = express();

app.use(express.static('./webapp'));
app.set('views', './webapp/view');
app.set('view engine', 'html');
app.engine('html', ejs);
app.get('/', function (req, res) {
    res.render('index.html');
});

app.listen(config.PORT, function () {
    // lightweight build action
    require('./util/build')();
    console.log('webapp listening at http://localhost:' + config.PORT);
});