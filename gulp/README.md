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

**Entrada:**

```
Isso é um teste do uso do replace.

[TAG], [TAG]

Exemplo [TAG]
```

**Código:**

```
var replace = require('gulp-replace');

gulp.task('exemploGulpReplace', exemploGulpReplace);

function exemploGulpReplace() {
	gulp.src(paths.replace)
		.pipe(replace('[TAG]', 'Teste'))
		.pipe(gulp.dest(paths.build));
}
```

**Exemplo de Execução:**

```
gulp exemploGulpReplace
```

**Retorno:**

```
Isso é um teste do uso do replace.

Teste, Teste

Exemplo Teste
```

### [gulp-rev](https://www.npmjs.com/package/gulp-rev)

Módulo gulp para adicionar revisão ao nome dos arquivos.

**Entrada:**

Arquivos: 

*	exemplo.js 
*	exemplo.css

**Código:**

```js 
var rev = require('gulp-rev');

gulp.task('exemploGulpRev', exemploGulpRev);

function exemploGulpRev() {
	gulp.src(paths.stripComments)
		.pipe(rev())
		.pipe(gulp.dest(paths.build));
}
```

**Exemplo de Execução:**

```
gulp exemploGulpRev
```

**Retorno:**

Arquivos: 

*	exemplo-1100c33912.js
*	exemplo-1dc94ccd81.css

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

**Entrada:**

```js
function exemplo(param1, param2) {
	console.log(param1, param2);
}

function exemplo02() {
	console.log('Teste');
	console.log('Teste 01');
	console.log('Teste 02');
}
```

**Código:**

```js
var uglify = require('gulp-uglify');

gulp.task('exemploGulpUglify', exemploGulpUglify);

function exemploGulpUglify() {
	gulp.src(paths.uglify)
		.pipe(uglify())
		.pipe(gulp.dest(paths.build));
}
```

**Exemplo de Execução:**

```
gulp exemploGulpUglify
```

**Retorno:**

```js
function exemplo(o,e){console.log(o,e)}function exemplo02(){console.log("Teste"),console.log("Teste 01"),console.log("Teste 02")}
```