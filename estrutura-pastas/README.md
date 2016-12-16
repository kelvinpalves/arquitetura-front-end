# Estrutura de Pastas e Nomenclatura de Arquivos

Um dos pontos importantes para o desenvolvimento da aplicação é a estruturação dos diretórios e a nomenclatura dos arquivos. Para isso as seguintes condições deverão ser levadas em consideração:

### **Locating** (*Localizar*)

Esta é uma condição super importante para o desenvolvimento do projeto. Caso a equipe não encontre facilmente os arquivos que precisa trabalhar, a estrutura deverá ser repensada.

*Localizar os códigos deverá ser uma tarefa intuitiva, simples e rápida.*

**Exemplo:**

```
/app 
	/modulo01
		/funcionalidade01
		/funcionalidade02
	/modulo02
		/funcionalidade01
		/funcionalidade02
	/modulo03
		/funcionalidade01
		/funcionalidade02
```

### **Identify** (*Identificar*)

Quando o desenvolvedor olhar um arquivo, prontamente ele precisa identificar o seu conteúdo e o que ele representa. Partindo desta premissa, a equipe vai gastar menos tempo a procura de um código especifico, tornando-se mais eficiente.

Para isso acontecer, além de uma boa estrutura de diretórios também é necessário uma nomenclatura clara e concisa.

### **Flat** (*Plano*)

É necessário manter uma estrutura plana e que possua um valor óbvio que ajude o restante da estrutura LIFT. Segundo John Papa a partir de 7 arquivos em uma pasta, já é necessário considerar a separação destes.

### **Try to stay DRY or T-DRY** (Tente manter-se em DRY)

> **DRY**: Don't Repeat Yourself (*Não repita a si mesmo*)

É importante para a aplicação não ficar se repetindo, porém, se para fazer isso for necessário sacrificar outro item do LIFT, então considera-se não aplicar esta regra.

**Exemplo:**

A criação de uma view para expor dos dados do cliente.

Ao invés de criar um arquivo cliente-view.html, deverá ser criado o arquivo cliente.html, pois no tipo do arquivo já está explicito a sua função.

> Para aplicar esta regra é necessário analisar se o tipo não possui uma convenção pré definida.

### **Nomenclatura**

Para um fácil entendimento por parte do desenvolvedor, é necessário a utilização de nomes consistentes para todos os componentes, de forma que seja possível descrever o seu tipo e funcionalidade.

**Padrão:**

* caracteristica.tipo.js


Tipo | Nome do Arquivo | Nome da Função
------|-------|---------
Configuration | loading.config.js | loading
Constants | info.constants.js | info
Controller | cliente.controller.js | Cliente
Directive | elemento-teste.directive.js | elementoTeste
Factory | formatar-numero.factory.js | formatarNumero
Module | cliente.module.js | app.cliente (Ver estrutura de módulos)
Route Configuration | teste.route.js | teste
Service | exemplo.service.js | exemplo

**Exemplo Configuration:**

Configuração de loading no módulo raiz.

Nome do arquivo: loading.config.js

```js
angular
	.module('app')
	.config(loading);

function loading() {
}
```

**Exemplo Constants:**

Constantes com informações do sistema.

Nome do arquivo: info.constants.js 

```js
var info = {
	version: 1.0.0,
	titleDefault: 'Title'
};

angular
	.module('app')
	.constant(info);
```

**Exemplo Controller**

Nome do arquivo: cliente.controller.js

```js 
angular 
	.module('app.cliente')
	.controller('Cliente');

function Cliente() {
}
```

**Exemplo Directive**

Nome do arquivo: elemento-teste.directive.js

```js 
angular 
	.module('app.layout')
	.directive('elementoTeste');

function elementoTeste() {
}
```

```html 

<elemento-teste></elemento-teste>
<div elemento-teste></div>

```

**Exemplo Factory**

Nome do arquivo: formatar-numero.factory.js 

```js 
angular 
	.module('core.utils')
	.directive('formatarNumero');

function formatarNumero() {
}
```

**Exemplo Module**

Nome do arquivo: cliente.module.js

```js 
angular.module('app.cliente', []);
```

**Exemplo Route Configuration**

Nome do arquivo: teste.route.js

```js 
angular
	.module('app')
	.config(teste);

	teste.$inject = ['$routeProvider', '$locationProvider'];

function teste($routeProvider, $locationProvider) {
}
```

**Exemplo Service**

Nome do arquivo: exemplo.service.js

```js 
angular 
	.module('app')
	.service('exemplo');

function exemplo() {
}
```

[Voltar Para Raiz](https://github.com/kelvinpalves/arquitetura-front-end)