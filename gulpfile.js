var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./flex-assignment"
    }
  });

  gulp.watch("flex-assignment/*.html").on("change", reload);
  gulp.watch("flex-assignment/styles/*.css").on("change", reload)

});