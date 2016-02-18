var gulp = require("gulp"),
    browserify = require("browserify"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    source = require('vinyl-source-stream'),
    babelify = require('babelify');

var watch_src = ['src/js/*.js'];

gulp.task('clean', function() {
    gulp.src(["src/build/**/*.js", "src/build/**/*.css"], { read: false })
        .pipe(rimraf());
});

gulp.task('js', () => {
    return browserify('src/js/app.js')
        .transform(babelify, { presets: ["es2015"] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('src/build/js'));
});

gulp.task("watch", () => {
    gulp.watch(watch_src, ['js']);
});

gulp.task("css", () => {
    return gulp.src('src/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('src/build/'))
});

gulp.task("build", ['clean', 'js', 'css', 'watch']);