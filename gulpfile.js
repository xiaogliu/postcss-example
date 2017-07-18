const gulp = require('gulp');

// 引入postcss
const postcss = require('gulp-postcss');

/**
  * 通过require引入postcss所需插件，这里除了引入flexibility
  */
gulp.task('css', function () {
  return gulp.src('src/main.css')
  .pipe( postcss([ require('postcss-flexibility') ]) )
  .pipe( gulp.dest('dist/') );
});
