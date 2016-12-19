var gulp = require('gulp');
var del = require('del');
var minifyCss = require('gulp-minify-css');
var paths = require('./gulp.config.json');
var rename = require('gulp-rename');

gulp.task('exemploDeleteFilesFolder', exemploDeleteFilesFolder);
gulp.task('exemploGulpMinifyCss', exemploGulpMinifyCss);

function exemploDeleteFilesFolder() {
	del(paths.build);
}

function exemploGulpMinifyCss() {
	return gulp.src(paths.css)
		.pipe(rename(paths.cssMin))
		.pipe(minifyCss())
		.pipe(gulp.dest(paths.buildCss));
}
