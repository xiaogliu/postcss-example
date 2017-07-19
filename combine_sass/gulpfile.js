const gulp = require('gulp');

// 引入postcss
const postcss = require('gulp-postcss');

// 引入SASS
const sass = require('gulp-sass');

/**
  * 通过require引入postcss所需插件，这里除了引入flexibility, autoprefixer插件
  */
gulp.task('css', function () {
  return gulp.src('src/main.css')
  .pipe( sass() )
  .pipe( postcss([ require('postcss-flexibility'), require('autoprefixer') ]) )
  .pipe( gulp.dest('dist/') );
});
