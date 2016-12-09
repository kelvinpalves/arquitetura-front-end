# Padrões de Código

Padrões que deverão ser seguidos para desenvolver as aplicações.

### Controller

**Remover lógica do controller**

O controller deve ser o responsável por buscar os dados e passa-los para a view, ou seja, nele não deve conter as regras de negócio e operações lógicas. Para isso crie services ou factories.

**Objetos com bind no topo.**

Mantenha os objetos que necessitam de bind no topo, tal prática torna fácil de identificar quais serão os itens utilizados na view.

**Ordenar funções e objetos**

Procure manter os objetos e funções ordenados, isso ajuda no momento de localização das implementações.

**Manter o foco**

Um controller deve ser criado para atender somente as necessidades de uma view. Funções reaproveitáveis devem ser transferidas para um factory.

**Controller nas Rotas**

Ao utilizar rotas para o carregamento das views, informe o controller na propriedade de configuração. Removendo-o do atributo ng-controller.

**DOM**

Não utilizar o controller para efetuar manipulações no DOM, para isso utilize as diretivas.

**Links**

*	[Guia de estilo](https://github.com/johnpapa/angular-styleguide/blob/master/a1/i18n/pt-BR.md#controllers)
*	[Dicas](https://johnpapa.net/angular-function-declarations-function-expressions-and-readable-code)