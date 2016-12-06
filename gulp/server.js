var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('dev.server', function () {
    nodemon({
        ext: 'js html css',
        script: 'app.js',
        ignore: ['dist']
    });
});