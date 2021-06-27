const gulp = require('gulp')
const useref = require('gulp-useref')

gulp.task('useref', function () {
  return gulp
    .src('app/*.html')
    .pipe(useref({ searchPath: '.js' }))
    .pipe(gulp.dest('dist'))
})
