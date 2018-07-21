var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');

gulp.task('clean', function() {
    gulp.src('./build/**')
      .pipe(clean({force: true}));
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

// gulp.task('build', [ 'html', 'css', 'js' ]);

gulp.task('build', function() {
  runSequence(
    ['clean'],
    ['html', 'css', 'js' ]
  );
});
