var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('typescript', function() {
  console.log('Compiling typescript');
  return gulp.src(['typescript/**/*.ts'])
    .pipe(ts({module: 'commonjs'})).js.pipe(gulp.dest('./deploy'))
});


gulp.task('watch', function() {
  gulp.watch('./typescript/**/*.ts', ['typescript']);
});