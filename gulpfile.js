const gulp = require('gulp');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const jshint = require('gulp-jshint');
const cssmin = require('gulp-cssmin');
const csslint = require('gulp-csslint');
const stripDebug = require('gulp-strip-debug');
const closureCompiler = require('gulp-closure-compiler');
const server = require('gulp-server-livereload');
var gzip = require('gulp-gzip');

gulp.task('clean', function(){
    return gulp.src('./dist/*')
        .pipe(clean());
});

gulp.task('csslint', function(){
    return gulp.src(['./src/*.css'])
        .pipe(csslint({
            'adjoining-classes' : false
        }))
        .pipe(csslint.reporter());
});

gulp.task('style', ['csslint'], function(){
    return gulp.src('./src/*.css')
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
        .pipe(closureCompiler({
            compilerPath: 'node_modules/google-closure-compiler/compiler.jar',
            fileName: 'vanilla-select.min.js'
        }))
        //.pipe(gzip())
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
