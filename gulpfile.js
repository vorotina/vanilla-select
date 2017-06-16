var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var csslint = require('gulp-csslint');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var stripDebug = require('gulp-strip-debug');
var closureCompiler = require('gulp-closure-compiler');
var gzip = require('gulp-gzip');
var server = require('gulp-server-livereload');

gulp.task('clean', function(){
    return gulp.src('./dist/*')
        .pipe(clean());
});

gulp.task('sass', function () {
    return gulp.src('./src/**.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('csslint', function(){
    return gulp.src(['./dist/*.css'])
        .pipe(csslint({
            'adjoining-classes' : false
        }))
        .pipe(csslint.reporter());
});

gulp.task('style', ['sass', 'csslint'], function() {
    return gulp.src('./dist/*.css')
        .pipe(cssmin())
        .pipe(concat('vanilla-select.css'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('jshint', function(){
    return gulp.src('./src/*.js')
        .pipe(jshint({ "esversion": 6 }))
        .pipe(jshint.reporter('default'));
});

gulp.task('script', function() {
    return gulp.src('./src/*.js')
        .pipe(stripDebug())
        .pipe(closureCompiler({
            compilerPath: 'node_modules/google-closure-compiler/compiler.jar',
            fileName: 'vanilla-select.min.js'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(gzip())
        .pipe(gulp.dest('dist'))
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
