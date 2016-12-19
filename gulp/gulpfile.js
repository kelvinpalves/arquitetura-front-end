var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var paths = require('./gulp.config.json');
var rename = require('gulp-rename');

gulp.task('exemploGulpMinifyCss', exemploGulpMinifyCss);

function exemploGulpMinifyCss() {
	return gulp.src(paths.css)
		.pipe(rename(paths.cssMin))
		.pipe(minifyCss())
		.pipe(gulp.dest(paths.buildCss));
}
