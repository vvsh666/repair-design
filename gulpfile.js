const {src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');

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
    watch("./sass/**/*.scss", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
};

function serveSass() {
    return src("./sass/**/*.sass", "./sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 16 versions'],
            cascade: false
        }))
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};

function buildCSS(done) {
    src(["css/**/**.css", "!css/**/**.min.css"])
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest("dist/css/"));
    src("css/**/**.min.css").pipe(dest("dist/css/"));
    done();
};

function buildJS(done) {
    src(["js/**.js", "!js/**/**.min.js"])
        .pipe(minify({
            ext:{
                min:'.js'
            },
            noSource: true,
        }))
        .pipe(dest("dist/js/"));
    src("js/**.min.js").pipe(dest("dist/js/"));
    done();
};

function buildHTML(done) {
    src("**.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest("dist/"));
    done();
};

function php(done) {
    src("**.php")
        .pipe(dest("dist/"));
    src("phpmailer/**.**")
        .pipe(dest("dist/phpmailer/"));
    done();
};

function fonts(done) {
    src("fonts/**/**.**")
        .pipe(dest("dist/fonts/"));
    done();
};

function imagemin(done) {
    src(["img/**/*.png", "img/**/*.jpg"])
        .pipe(tinypng({key: 'QgTGKsjhgRj5GWmGmSg5rr88WmV5HRdC'}))
        .pipe(dest("dist/img/"));
    src("img/**/*.svg")
        .pipe(dest("dist/img/"));
    done();
}

exports.serv = bs;
exports.build = series(buildCSS, buildJS, buildHTML, php, fonts, imagemin);
