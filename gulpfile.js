var gulp = require('gulp')
  , connect = require('gulp-connect')

gulp.task('serve', function(){
  connect.server({
    livereload: true
  , root: '.'
  , port: 4444
  })
})

gulp.task('markdown', function(){
  gulp.src('./markdown/*.md')
  .pipe(connect.reload())
})

gulp.task('watch', function(){
  gulp.watch(['./markdown/*.md'], ['html'])
})

gulp.task('default', ['watch', 'serve'])

