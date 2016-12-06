var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var annotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');

var path = {
    library: ['./webapp/library/*.js'],
    common: ['./webapp/common/*.js'],
    main: ['./webapp/main.js'],
    ngCtrl: ['./webapp/view/*.js'],
    ngLogic: ['./webapp/service/*.js'],
    all: function () {
        return Array.prototype.concat.apply(
            this.library,
            this.common,
            this.main,
            this.ngCtrl,
            this.ngLogic
        );
    }
};

var tasks = [
    'js.library',
    'js.common',
    'js.main',
    'js.ngCtrl',
    'js.ngLogic'
];

gulp.task(tasks[0], function () {

    require('../build/build')();

    return gulp.src(path.library)
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task(tasks[1], function () {
    return gulp.src(path.common)
        //.pipe(annotate())
        .pipe(concat('common.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task(tasks[2], function () {
    return gulp.src(path.main)
        //.pipe(annotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task(tasks[3], function () {
    return gulp.src(path.ngCtrl)
        .pipe(annotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist/ctrl'));
});

gulp.task(tasks[4], function () {
    return gulp.src(path.ngLogic, {base: 'webapp'})
        //.pipe(annotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch.js', tasks, function () {
    gulp.watch(path.all(), tasks);
});