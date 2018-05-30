var gulp = require('gulp');

var path = require('path');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var less = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('watch', function() {
    let css = gulp.watch('./client/styles/less/*.less', [ 'less' ])
    css.on('change', function(event) {
        console.log('Css Change File: ' + event.path);
    })
})

gulp.task('less', function() {
    return gulp.src([ './client/styles/less/*.less' ])
        .pipe(less({ paths: [path.join(__dirname, 'less', 'includes' )]}))
        .pipe(concat('AppStylesMin.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./client/dist'))
})

gulp.task('default', [ 'less', 'watch' ], function() {
    console.log('Gulp is running correctly...')
})