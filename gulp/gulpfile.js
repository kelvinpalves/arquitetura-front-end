var gulp = require('gulp');
var autoPrefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var del = require('del');
var minifyCss = require('gulp-minify-css');
var paths = require('./gulp.config.json');
var rename = require('gulp-rename');

gulp.task('exemploDeleteFilesFolder', exemploDeleteFilesFolder);
gulp.task('exemploGulpAutoPrefixer', exemploGulpAutoPrefixer);
gulp.task('exemploGulpConcat', exemploGulpConcat);
gulp.task('exemploGulpMinifyCss', exemploGulpMinifyCss);

function exemploDeleteFilesFolder() {
	del(paths.build);
}

function exemploGulpAutoPrefixer() {
	gulp.src(paths.cssAutoPrefixer)
		.pipe(autoprefixer())
		.pipe(gulp.dest(paths.build));
}

function exemploGulpConcat() {
	gulp.src([].concat(paths.concat))
		.pipe(concat('all.min.css'))
		.pipe(gulp.dest(paths.build));
}

function exemploGulpMinifyCss() {
	return gulp.src(paths.css)
		.pipe(rename(paths.cssMin))
		.pipe(minifyCss())
		.pipe(gulp.dest(paths.buildCss));
}
