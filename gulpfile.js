const gulp = require('gulp');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const runSequence = require('run-sequence');
const del = require('del');

gulp.task('build-clean', function() {
    return del(['build']);
});

gulp.task('html', function(){
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'))
});

gulp.task('css', function(){
  return gulp.src('src/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
});

gulp.task('js', function(){
  return gulp.src(['src/js/angular.min.js', 'src/js/angular-route.min.js', 'src/controllers.js', 'src/templates/detail/detailController.js',
    'src/templates/list/listController.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});

gulp.task('build', function() {
  runSequence(
    ['build-clean'],
    ['html', 'css', 'js' ]
  );
});
