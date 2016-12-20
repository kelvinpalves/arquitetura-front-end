# Tarefas Automatizadas

### [browser-sync](https://www.browsersync.io/)

Módulo gulp para atualizar o browser ao editar um arquivo.

**Código:**

```js
var browserSync = require('browser-sync').create();

gulp.task('exemploGulpBrowserSync', exemploGulpBrowserSync);

function exemploGulpBrowserSync() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch('index.html').on('change', browserSync.reload);
}
```

**Exemplo de Execução:**

```shell 
gulp exemploGulpBrowserSync
```

### [delete-files-folder](https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md)

Módulo gulp para remover arquivos e diretórios.

**Código:**

```js 
var del = require('del');

gulp.task('exemploDeleteFilesFolder', exemploDeleteFilesFolder);

function exemploDeleteFilesFolder() {
	del(paths.build);
}
```

**Exemplo de Execução:**

```shell 
gulp exemploDeleteFilesFolder
```

### [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)

Módulo gulp para adicionar os prefixos dos rederizadores CSS.

**Exemplo de Uso:**

**Retorno:**

### [gulp-concat](https://www.npmjs.com/package/gulp-concat)

Módulo gulp para concatenar arquivos.

**Entrada:**

exemplo01.css

```css 
h1 {
	color: red;
}
```

exemplo02.css 

```css 
p {
	color: red;
}
```

**Código:**

```js 
var concat = require('gulp-concat');

gulp.task('exemploGulpConcat', exemploGulpConcat);

function exemploGulpConcat() {
	gulp.src([].concat(paths.concat))
		.pipe(concat('all.min.css'))
		.pipe(gulp.dest(paths.build));
}
```

**Exemplo de Execução:**

```shell 
gulp exemploGulpConcat
```

**Retorno:**

```css 
h1 {
	color: red;
}
p {
	color: red;
}
```

### [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)

Módulo gulp para verificar erro em arquivos JavaScript.

**Entrada:**

```js 
function teste() {
	var x = 10
}
```

**Código:**

```js 
var jshint = require('gulp-jshint');

gulp.task('exemploGulpJshint', exemploGulpJshint);

function exemploGulpJshint() {
	gulp.src(paths.jshint)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
}
```

**Exemplo de Execução:**

```shell
gulp exemploGulpJshint
```

**Retorno:**

```shell 
[10:37:17] Using gulpfile /var/www/arquitetura-front-end/gulp/gulpfile.js
[10:37:17] Starting 'exemploGulpJshint'...
[10:37:17] Finished 'exemploGulpJshint' after 14 ms
src/app/jshint/exemplo.js: line 2, col 15, Missing semicolon.

1 error
```

### [gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css)

Módulo gulp para minificar arquivos CSS.

**Entrada:**

```css
h1,h2,h3,h4,h5,h6 {
	color:red;
}

p {
	color: red;
}

.quadrado-pequeno {
	width:100px;
	height:100px;
	border:1px solid #000;
}
```

**Código:**

```js 
var minifyCss = require('gulp-minify-css');

gulp.task('exemploGulpMinifyCss', exemploGulpMinifyCss);

function exemploGulpMinifyCss() {
	gulp.src(paths.css)
		.pipe(minifyCss())
		.pipe(gulp.dest(paths.buildCss));
}
```

**Exemplo de Execução:**

```shell
gulp exemploGulpMinifyCss
```

**Retorno:**
```css 
h1,h2,h3,h4,h5,h6,p{color:red}.quadrado-pequeno{width:100px;height:100px;border:1px solid #000}
```

### [gulp-ng-annotate](https://www.npmjs.com/package/gulp-ng-annotate/)

Módulo gulp para injetar dependências não declaradas em arquivos AngularJS.

**Exemplo de Uso:**

**Retorno:**

### [gulp-rename](https://www.npmjs.com/package/gulp-rename)

Módulo gulp para renomear arquivos.

**Exemplo de Uso:**

**Retorno:**

### [gulp-replace](https://www.npmjs.com/package/gulp-replace)

Módulo gulp para substituir textos em arquivos.

**Exemplo de Uso:**

**Retorno:**

### [gulp-rev](https://www.npmjs.com/package/gulp-rev)

Módulo gulp para adicionar revisão ao nome dos arquivos.

**Exemplo de Uso:**

**Retorno:**

### [gulp-strip-comments](https://www.npmjs.com/package/gulp-strip-comments/)

Módulo para remover os comentários de arquivos CSS, JavaScript e JSON.

**Entrada:**

exemplo.js
```js 
// gulp-strip-comment deve remover este comentário.
function exemplo() {
	// deverá remover este comentário também.
	console.log("teste");
}
```

exemplo.css
```css 
/*Deverá remover este comentário*/
h1 {
	/*Deverá remover este comentário*/
	color: red;
}
```

**Código:**

```js 
var strip = require('gulp-strip-comments');

gulp.task('exemploGulpStripComments', exemploGulpStripComments);

function exemploGulpStripComments() {
	gulp.src(paths.stripComments)
		.pipe(strip())
		.pipe(gulp.dest(paths.build));
}
```

**Exemplo de Execução:**

```shell
gulp exemploGulpStripComments
```

**Retorno:**

exemplo.js
```js 
function exemplo() {
	console.log("teste");
}
```

exemplo.css
```css 
h1 {
	color: red;
}
```

### [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)

Módulo gulp para minificar arquivos.

**Exemplo de Uso:**

**Retorno:**

### [gulp-uncss](https://www.npmjs.com/package/gulp-uncss/)

Módulo para remover estilos não criados e não utilizados em arquivos CSS.

**Exemplo de Uso:**

**Retorno:**

### [gulp-util](https://www.npmjs.com/package/gulp-util)

Módulo gulp com diversas funções úteis.

**Exemplo de Uso:**

**Retorno:**