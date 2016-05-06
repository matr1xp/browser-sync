var gulp = require('gulp'),

browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
      files: 'index.html, styles.css, *.*',
      port: 8082
    });
 });
