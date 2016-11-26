var express = require('express');
var ejs = require('ejs-mate');
var app = express();
var port = 3000;

app.use(express.static('./webapp'));
app.set('views', './webapp/view');
app.set('view engine', 'html');
app.engine('html', ejs);
app.get('/', function (req, res) {
    res.render('index.html');
});

app.listen(port, function () {

    // copy min libs to webapp/common/ folder.
    var fs = require('fs');
    var bowerFolder = 'bower_components/';
    var targetFolder = 'webapp/common/';
    var files = [
        'requirejs/require.js',
        'jquery-mobile/external/jquery/jquery.min.js',
        'angular/angular.min.js',
        'angular-ui-router/release/angular-ui-router.min.js'
    ];

    if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder);
    }

    files.forEach(function (file) {
        var fileName = file.substr(file.lastIndexOf('/') + 1);
        fs.writeFileSync(
            targetFolder + fileName,
            fs.readFileSync(bowerFolder + file)
        );
    });

    console.log('webapp listening at http://localhost:' + port);
});