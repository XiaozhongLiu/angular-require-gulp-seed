var gulp = require('gulp');

require('./gulp/script');
require('./gulp/static');
require('./gulp/server');

gulp.task('watch', ['watch.js', 'watch.static']);
gulp.task('default', ['watch', 'dev.server']);