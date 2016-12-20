var gulp = require('gulp');
var autoPrefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var del = require('del');
var jshint = require('gulp-jshint');
var minifyCss = require('gulp-minify-css');
var paths = require('./gulp.config.json');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var strip = require('gulp-strip-comments');
var rev = require('gulp-rev');

gulp.task('exemploDeleteFilesFolder', exemploDeleteFilesFolder);
gulp.task('exemploGulpBrowserSync', exemploGulpBrowserSync);
gulp.task('exemploGulpAutoPrefixer', exemploGulpAutoPrefixer);
gulp.task('exemploGulpConcat', exemploGulpConcat);
gulp.task('exemploGulpJshint', exemploGulpJshint);
gulp.task('exemploGulpRev', exemploGulpRev);
gulp.task('exemploGulpStripComments', exemploGulpStripComments);
gulp.task('exemploGulpMinifyCss', exemploGulpMinifyCss);

function exemploDeleteFilesFolder() {
	del(paths.build);
}

function exemploGulpAutoPrefixer() {
	gulp.src(paths.cssAutoPrefixer)
		.pipe(autoprefixer())
		.pipe(gulp.dest(paths.build));
}

function exemploGulpBrowserSync() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch('index.html').on('change', browserSync.reload);
}

function exemploGulpConcat() {
	gulp.src([].concat(paths.concat))
		.pipe(concat('all.min.css'))
		.pipe(gulp.dest(paths.build));
}

function exemploGulpJshint() {
	gulp.src(paths.jshint)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
}

function exemploGulpMinifyCss() {
	gulp.src(paths.css)
		.pipe(rename(paths.cssMin))
		.pipe(minifyCss())
		.pipe(gulp.dest(paths.buildCss));
}

function exemploGulpRev() {
	gulp.src(paths.stripComments)
		.pipe(rev())
		.pipe(gulp.dest(paths.build));
}

function exemploGulpStripComments() {
	gulp.src(paths.stripComments)
		.pipe(strip())
		.pipe(gulp.dest(paths.build));
}