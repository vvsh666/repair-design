const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('css-min', function (done) {
    gulp.src(['css/*.css', '!css/*.min.css'])
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'));
        done();
});