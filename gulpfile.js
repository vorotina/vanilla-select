var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');

gulp.task('clean', function(){
    return gulp.src('./dist/*')
        .pipe(clean());
});

gulp.task('sass', function () {
    return gulp.src('./src/**.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('build', gulp.series('clean', 'sass'));

gulp.task('serve', function() {
    gulp.src('.')
        .pipe(server({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});
