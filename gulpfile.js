const gulp = require('gulp');

// 引入postcss
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

/**
  * 通过require引入postcss所需插件，这里除了引入flexibility，还引入了precss和autoprefixer
  * 先要通过npm安装插件，package.json里已写好
  */
gulp.task('css', function () {
  return gulp.src('src/main.css')
  .pipe( sourcemaps.init() )
  .pipe( postcss([ require('postcss-flexibility'), require('precss'), require('autoprefixer') ]) )
  .pipe( sourcemaps.write('.') )
  .pipe( gulp.dest('dist/') );
});
