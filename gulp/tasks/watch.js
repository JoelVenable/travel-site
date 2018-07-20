var gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync-wsl').create();



gulp.task('watch', function () {
  browserSync.init({
    server: {
      baseDir: "app",
    },
    browser: 'chrome'
  });

  watch([
    'app/assets/styles/**/*.css', 'app/assets/styles/**/*.scss'
  ], function () {
    gulp.start('cssInject');
  });

  watch(['app/assets/images/icons/**/*.svg'], function () {
    gulp.start('icons');
  });

  watch('app/index.html', function () {
    browserSync.reload();
  });
});


gulp.task('cssInject', ['styles'], function () {
  return gulp
    .src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});