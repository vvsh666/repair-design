const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
// const cssmin = require('gulp-cssmin');
// const rename = require('gulp-rename');
const sass = require('gulp-sass');

// Static server
function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
};

// gulp.task('css-min', function (done) {
//     gulp.src(['css/*.css', '!css/*.min.css'])
//         .pipe(cssmin())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest('css'));
//         done();
// });

function serveSass() {
    return src("./sass/*.sass")
        .pipe(sass())
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};

exports.serv = bs;