var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var imageMin = require('gulp-imagemin');
var minifyHtml = require('gulp-minify-html');

var resPath = './webapp/static/';
var htmlPath = './webapp/view/';
var path = {
    css: resPath + '*.css',
    font: resPath + 'font/*.*',
    image: resPath + 'image/*.*',
    template: htmlPath + '*.html'
};

gulp.task('static.css', function () {
    return gulp.src(path.css)
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('static.font', function () {
    return gulp.src(path.font)
        .pipe(gulp.dest('dist/font'));
});

gulp.task('static.image', function () {
    return gulp.src(path.image)
        .pipe(imageMin())
        .pipe(gulp.dest('dist/image'));
});

gulp.task('static.view', ['static.font', 'static.image'], function () {
    return gulp.src(path.template)
        .pipe(minifyHtml())
        .pipe(gulp.dest('dist/view'));
});

gulp.task('watch.static', ['static.css', 'static.view'], function () {
    gulp.watch(path.css, ['static.css']);
    gulp.watch(path.template, ['static.view']);
});