var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	useref = require('gulp-useref');

function style() {
	return gulp.src('docs/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('docs/css'))
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
			baseDir: 'docs'
		}
	});
	gulp.watch('docs/scss/**/*.scss', style);
	gulp.watch('docs/**/*.html').on('change', browserSync.reload);
	gulp.watch('docs/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
//exports.useref = useref;