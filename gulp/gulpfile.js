var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var del = require('del');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var minifyCss = require('gulp-minify-css');
var paths = require('./gulp.config.json');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var rev = require('gulp-rev');
var strip = require('gulp-strip-comments');
var uglify = require('gulp-uglify');

gulp.task('exemploDeleteFilesFolder', exemploDeleteFilesFolder);
gulp.task('exemploGulpBrowserSync', exemploGulpBrowserSync);
gulp.task('exemploGulpConcat', exemploGulpConcat);
gulp.task('exemploGulpJshint', exemploGulpJshint);
gulp.task('exemploGulpMinifyCss', exemploGulpMinifyCss);
gulp.task('exemploGulpRename', exemploGulpRename);
gulp.task('exemploGulpReplace', exemploGulpReplace);
gulp.task('exemploGulpRev', exemploGulpRev);
gulp.task('exemploGulpStripComments', exemploGulpStripComments);
gulp.task('exemploGulpUglify', exemploGulpUglify);

function exemploDeleteFilesFolder() {
	del(paths.build);
}

function exemploGulpBrowserSync() {
	browserSync.init({server: { baseDir: './' }});
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

function exemploGulpRename() {
	gulp.src(paths.jshint)
		.pipe(rename('teste/teste.js'))
		.pipe(gulp.dest(paths.build));
}

function exemploGulpReplace() {
	gulp.src(paths.replace)
		.pipe(replace('[TAG]', 'Teste'))
		.pipe(gulp.dest(paths.build));
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

function exemploGulpUglify() {
	gulp.src(paths.uglify)
		.pipe(uglify())
		.pipe(gulp.dest(paths.build));
}