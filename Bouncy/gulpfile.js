var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
//var rigger = require('gulp-rigger');

// Task for Rigger
//gulp.task('rigger', function () {
//  gulp.src('./src/**/*.html')
//    .pipe(rigger())
//    .pipe(gulp.dest('./build'));
//});

// Task for HTML
gulp.task('html', function () {
  return gulp.src('./src/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./build'));
});


//Task for SASS
gulp.task('css', function () {
  return gulp.src('./src/css/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

// task for fonts
gulp.task('fonts', function () {
  gulp.src('./src/webfonts/*{ttf,woff,woff2,svg,eot}')
    .pipe(gulp.dest('./build/webfonts'))
  gulp.src('./src/css/*.css')
    .pipe(gulp.dest('./build/css'))
});

/*Task for JS*/
gulp.task('js', () => {
  gulp.src([
    './node_modules/jquery/dist/jquery.js',
    './node_modules/slick-carousel/slick/slick.js',
    './node_modules/masonry-layout/dist/masonry.pkgd.min.js',
    './node_modules/isotope-layout/dist/isotope.pkgd.min.js',
    './src/js/main.js'
  ])
    .pipe(concat('main.js'))
    .pipe(minify({
      ext: {
        min: '.js'
      },
      compress: true,
      noSource: true,
    }))
    .pipe(gulp.dest('./build/js'))
  //.pipe(reload({ stream: true }));
});

/* Task Build */
gulp.task('build', ['html', 'css', 'js', 'fonts']);

/* Task Watch */
gulp.task('watch', () => {
  watch('./src/webfonts/*{ttf,woff,woff2,svg,eot}', () => gulp.run('fonts'));
  watch('./src/*.html', () => gulp.run('html'));
  watch('./src/css/**/*.scss', () => gulp.run('css'));
  watch('./src/js/**/*.js', () => gulp.run('js'));
});
/* default task */
gulp.task('default', ['build', 'watch', 'fonts']);

