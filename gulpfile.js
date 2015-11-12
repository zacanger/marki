var gulp		 = require('gulp')
	,	uglify	 = require('gulp-uglify')
	,	mincss	 = require('gulp-cssmin')
  , concat   = require('gulp-concat')
//	,	watcher  = gulp.watch('scripts/**.js', 'styles/*.css', ['minjs', 'mincss']);
	,	watcher  = gulp.watch('scripts/**.js', ['minjs']);

// gulp.task('vendorjs', function(){
// 	return gulp.src('vendor/*.js')
// 		.pipe(concat('vendor.js'))
// 		.pipe(uglify())
// 		.pipe(gulp.dest('dist'));
// });

gulp.task('minjs', function(){
	return gulp.src('scripts/**.js')
		.pipe(concat('min.js'))
    .pipe(uglify())
		.pipe(gulp.dest('dist'));
});

// gulp.task('mincss', function(){
//	return gulp.src('styles/*.css', 'styles/*/*.css')
//	.pipe(cssmin())
//	.pipe(gulp.dest('dist'));
//});

watcher.on('change', function(event){
	console.log('heyo, ur ' + event.patch + ' be all ' + event.type + ' at ' + new Date() + '... so i gon run dem tasks fuh you.');
});

gulp.task('default', ['minjs']);

