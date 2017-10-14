var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var gulpCopy = require('gulp-copy');

gulp.task('serve', ['html', 'sass', 'watch'], function() {
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
  return gulp.src(['src/*.html', 'src/js/*.js'])
    .pipe(gulpCopy('./public', { prefix: 1 }))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch(['src/*.html', 'src/js/*.js'], ['html']).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);