var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var cssmin = require('gulp-cssmin');
var csslint = require('gulp-csslint');
var autoPrefixer = require('gulp-autoprefixer');
var stripDebug = require('gulp-strip-debug');
var server = require('gulp-server-livereload');

gulp.task('clean', function(){
    return gulp.src('./dist/*')
        .pipe(clean());
});

gulp.task('csslint', function(){
    return gulp.src(['./src/**/*.css', './src/*.css'])
        .pipe(csslint({
            'adjoining-classes' : false
        }))
        .pipe(csslint.reporter());
});

gulp.task('style', ['csslint'], function(){
    return gulp.src('./src/*.css')
        .pipe(autoPrefixer())
        .pipe(cssmin())
        .pipe(concat('vanilla-select.min.css'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('jshint', function(){
    return gulp.src('./src/*.js')
        .pipe(jshint({ esversion: 6 }))
        .pipe(jshint.reporter('default'));
});

gulp.task('script', ['jshint'], function(){
    return gulp.src('./src/*.js')
        .pipe(stripDebug())
        //.pipe(uglify())
        .pipe(concat('vanilla-select.min.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['clean', 'style', 'script']);

gulp.task('serve', function() {
    gulp.src('.')
        .pipe(server({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});
