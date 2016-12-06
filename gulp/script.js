var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var annotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');

var path = {
    common: ['./webapp/common/*.js'],
    app: ['./webapp/*.js'],
    ngCtrl: ['./webapp/view/*.js'],
    ngLogic: ['./webapp/service/*.js'],
    all: function () {
        return Array.prototype.concat.apply(
            this.common,
            this.app,
            this.ngCtrl,
            this.ngLogic
        );
    }
};

var tasks = [
    'js.common',
    'js.app',
    'js.ngCtrl',
    'js.ngLogic'
];

gulp.task(tasks[0], function () {

    require('../util/build')();

    return gulp.src(path.common)
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task(tasks[1], function () {
    return gulp.src(path.app, {base: 'webapp'})
        .pipe(annotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task(tasks[2], function () {
    return gulp.src(path.ngCtrl)
        .pipe(annotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist/ctrl'));
});

gulp.task(tasks[3], function () {
    return gulp.src(path.ngLogic, {base: 'webapp'})
        .pipe(annotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch.js', tasks, function () {
    gulp.watch(path.all(), tasks);
});