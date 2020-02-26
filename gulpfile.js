var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	useref = require('gulp-useref');

function style() {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
}

// function useref() {
// 	return gulp.src('app/**/*.html')
// 		.pipe(useref())
// 		.pipe(gulp.dest('dist'));
// }

function watch() {
	style();
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	});
	gulp.watch('app/scss/**/*.scss', style);
	gulp.watch('app/**/*.html').on('change', browserSync.reload);
	gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
//exports.useref = useref;