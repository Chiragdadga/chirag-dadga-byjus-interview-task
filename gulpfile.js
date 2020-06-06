'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var concat = require("gulp-concat");
sass.compiler = require('node-sass');

gulp.task('sass', function() {
  gulp.src(['./src/styles/**/*.scss', './src/**/**/*.scss'])
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass({
      outputStyle: 'compressed',  //'expanded',
      errLogToConsole: true,
      onError: function(err) {
        return notify().write(err);
      }
    }))
    .pipe(concat("styles.bundle.css"))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('./public/css/'))
});
gulp.task('default', function () {
    gulp.watch(['./src/styles/*.scss', './src/**/**/*.scss'], ['sass']);
  gulp.src(['gulpfile.js']).pipe(notify({ message: 'You are ready to rock.' }));
});
