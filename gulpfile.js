var gulp      = require('gulp')
  , connect   = require('gulp-connect')
  , watch     = require('gulp-watch')
  , concat    = require('gulp-concat')
  , uglify    = require('gulp-uglify')
  , uglifycss = require('gulp-uglifycss')
  , annotate  = require('gulp-ng-annotate')
  , tasklist  = require('gulp-task-listing')
  , port      = process.argv[2] || 6666

gulp.task('serve', function(){
  connect.server({
    port       : port
  , root       : './public'
  })
})

gulp.task('js', function(){
  gulp.src('./src/**/*.js')
  .pipe(annotate())
  .pipe(uglify())
  .pipe(concat('js.min.js'))
  .pipe(gulp.dest('./public'))
})

gulp.task('css', function(){
 gulp.src('./src/**/*.css')
  .pipe(uglifycss())
  .pipe(concat('css.min.css'))
  .pipe(gulp.dest('./public'))
})

gulp.task('help', tasklist)

gulp.task('default', ['js', 'css', 'serve'])

