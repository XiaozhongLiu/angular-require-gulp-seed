module.exports = function () {

    // copy min libs to webapp/common/ folder.
    var fs = require('fs');
    var config = require('../config');
    var bowerFolder = 'bower_components/';
    var targetFolder = 'webapp/common/';

    if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder);
    }

    config.COMMON_LIBS.forEach(function (file) {
        var fileName = file.substr(file.lastIndexOf('/') + 1);
        fs.writeFileSync(
            targetFolder + fileName,
            fs.readFileSync(bowerFolder + file)
        );
    });
};