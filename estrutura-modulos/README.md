# Estrutura de Módulos

Para a criação de uma arquitetura de baixo acoplamento entre os artefatos do sistema, o processo de modularização deverá ser bem estruturado antes do início do seu desenvolvimento.

Esta é uma prática sugerida pela própria equipe desenvolvimento do AngularJS, que propõe a modularidade e separação dos artefatos.

### Módulos Iniciais:

Abaixo a lista de módulos que deverão ser criados ao iniciar o desenvolvimento da aplicação:

### root

Deverá ser criado um módulo raiz para a aplicação, este módulo será o responsável por reunir as diversas funcionalidades do sistema.

O nome do módulo deverá ser efetuado conforme a sua aplicação.

**Exemplos:**

```js
/* Site público */
angular.module('site', []);

/* Sistema Intranet */
angular.module('sistema', []);

/* Aplicativo Mobile */
angular.module('app', []);
```

### core

Módulo com funcionalidades que serão compartilhadas entre as aplicações.

**Exemplos:** Formatadores, filtros, diretivas, autenticação, etc...

```js
/* módulo público */
angular
	.module('core', [
		'core.auth',
		'core.logger',
		'core.utils'
	]);

/* funcionalidades utéis para aplicação.
*   exemplo:
*	formatar data
*	formatar número
*/
angular.module('core.utils', []);

/* regras de autenticação no sistema. */
angular.module('core.auth', []);

/* funcionalidades para registrar os logs de operação e acesso. */
angular.module('core.logger', []);
```

A estrutura acima demonstra de forma simples como modularizar as funcionalidades do sistema e deixa-las prontas para o reúso.

### sub-módulos

Deverão ser criados muitos módulos pequenos e independentes, ou seja, cada funcionalidade do sistema deverá se tornar um módulo.

Trabalhando desta forma, a aplicação se torna modular e de fácil acoplamento, nos permitindo trabalhar de forma híbrida e construindo fatias verticais da aplicação.

Seguindo esta linha de desenvolvimento, podemos finalizar as funcionalidades e ir juntando tudo de forma incremental, reduzindo ao máximo o nível de dependência entre os artefatos do sistema.

**Exemplo de Modularização:**
	
* **Aplicação**. (Módulo Principal)
	*	**Orçamento** (Módulo de Orçamentos)
		* **CRUD01** (Módulo para CRUD01)
		* **CRUD02** (...)
		* **CRUD03** (...)
		* **...** (...)
		* **CRUD10** (Módulo para CRUD10)
	*	**Relatórios** (Módulo de Relatórios)
		* **Relatório 01** (Módulo com Relatório 1)
		* **...** (...)
		* **Relatório 10** (Módulo com Relatório 10)
	* 	**Financeiro** (Módulo Financeiro)

Utilizando a estrutura acima, fica fácil de acoplar e desacoplar as funcionalidades no sistema.

**Exemplo da estrutra no AngularJS:**

```js
angular
	.module('app', [
		'app.orcamento',
		'app.relatorios'
	]);

angular
	.module('app.orcamento', [
		'app.orcamento.crud01',
		'app.orcamento.crud02',
		'app.orcamento.crud03'
	]);

/* possui os controllers, services, factories... */
angular.module('app.orcamento.crud01', []);
/* possui os controllers, services, factories... */
angular.module('app.orcamento.crud02', []);
angular.module('app.orcamento.crud03', []);

angular
	.module('app.relatorios', [
		'app.relatorios.relatorio01',
		'app.relatorios.relatorio02',
		'app.relatorios.relatorio03'
	]);
	
/* possui os controllers, services, factories... */
angular.module('app.relatorios.relatorio01', []);
/* possui os controllers, services, factories... */
angular.module('app.relatorios.relatorio02', []);
angular.module('app.relatorios.relatorio03', []);
```

Dúvidas e sugestões em: kelinpalves@gmail.com