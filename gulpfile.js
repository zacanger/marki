var gulp      = require('gulp')
  , connect   = require('gulp-connect')
  , watch     = require('gulp-watch')
  , concat    = require('gulp-concat')
  , uglify    = require('gulp-uglify')
  , uglifycss = require('gulp-uglifycss')
  , annotate  = require('gulp-ng-annotate')
  , tasklist  = require('gulp-task-listing')

gulp.task('serve', function(){
  connect.server({
    livereload : true
  , port       : 4444
  , root       : '.'
  })
})


gulp.task('js', function(){
  .src('./**/*.js')
  .pipe(annotate())
  .pipe(uglify())
  .pipe(concat('js.min.js'))
  .pipe(gulp.dest('./public'))
})

gulp.task('css', function(){
  .src('./**/*.css')
  .pipe(uglifycss())
  .pipe(concat('css.min.css'))
  .pipe(gulp.dest('./public'))
})

gulp.task('serve', function(){
  connect.server({
    livereload: true
  , root: '.'
  , port: 4444
  })
})

gulp.task('reload', function(){
  gulp.src('./public/**')
  .pipe(connect.reload())
})

