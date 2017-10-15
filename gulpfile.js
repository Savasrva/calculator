var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var gulpCopy = require('gulp-copy');
var concat = require('gulp-concat');

gulp.task('serve', ['html', 'sass', 'js', 'watch'], function() {
  browserSync.init({
    server: {
      baseDir: './public'
    }
  });
});

gulp.task('sass', function() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
});

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(gulpCopy('./public', { prefix: 1 }))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src(['./src/js/curry.js','./src/js/domElements.js','./src/js/support.js','./src/js/calculator.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch('src/*.html', ['html']).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);