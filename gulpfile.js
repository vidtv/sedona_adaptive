var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var server = require("browser-sync").create();

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('source/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('source/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task("style", function () {
    gulp.src("source/sass/style.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest("source/css"))
        .pipe(server.stream());
});

gulp.task("serve", ["style"], function () {
    server.init({
        server: "source/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("source/sass/**/*.{scss,sass}", ["style"]);
    gulp.watch("source/*.html").on("change", server.reload);
});