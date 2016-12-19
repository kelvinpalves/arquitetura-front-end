# Tarefas Automatizadas

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
	return gulp.src(paths.css)
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

### [gulp-concat](https://www.npmjs.com/package/gulp-concat)

Módulo gulp para concatenar arquivos.

**Exemplo de Uso:**

**Retorno:**

### [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)

Módulo gulp para minificar arquivos.

**Exemplo de Uso:**

**Retorno:**

### [delete-files-folder](https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md)

Módulo gulp para remover arquivos e diretórios.

**Exemplo de Uso:**

**Retorno:**

### [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)

Módulo gulp para verificar erro em arquivos JavaScript.

**Exemplo de Uso:**

**Retorno:**

### [gulp-livereload](https://www.npmjs.com/package/gulp-livereload)

Módulo gulp para atualizar o browser ao editar um arquivo.

**Exemplo de Uso:**

**Retorno:**

### [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)

Módulo gulp para adicionar os prefixos dos rederizadores CSS.

**Exemplo de Uso:**

**Retorno:**

### [gulp-rename](https://www.npmjs.com/package/gulp-rename)

Módulo gulp para renomear arquivos.

**Exemplo de Uso:**

**Retorno:**

### [gulp-rev](https://www.npmjs.com/package/gulp-rev)

Módulo gulp para adicionar revisão ao nome dos arquivos.

**Exemplo de Uso:**

**Retorno:**

### [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)

Módulo gulp para minificar imagens.

**Exemplo de Uso:**

**Retorno:**

### [gulp-replace](https://www.npmjs.com/package/gulp-replace)

Módulo gulp para substituir textos em arquivos.

**Exemplo de Uso:**

**Retorno:**

### [gulp-util](https://www.npmjs.com/package/gulp-util)

Módulo gulp com diversas funções úteis.

**Exemplo de Uso:**

**Retorno:**

### [gulp-ng-annotate](https://www.npmjs.com/package/gulp-ng-annotate/)

Módulo gulp para injetar dependências não declaradas em arquivos AngularJS.

**Exemplo de Uso:**

**Retorno:**

### [gulp-strip-comments](https://www.npmjs.com/package/gulp-strip-comments/)

Módulo para remover os comentários de arquivos CSS, JavaScript e JSON.

**Exemplo de Uso:**

**Retorno:**

### [gulp-uncss](https://www.npmjs.com/package/gulp-uncss/)

Módulo para remover estilos não criados e não utilizados em arquivos CSS.

**Exemplo de Uso:**

**Retorno:**