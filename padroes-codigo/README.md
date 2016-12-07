# Padrões de Código

Alguns padrões que deverão ser seguidos durante o processo de desenvolvimento.

### Controller

Algumas definições que devem ser seguidas ao desenvolver os controllers.

Motivos: [Controllers](https://github.com/johnpapa/angular-styleguide/blob/master/a1/i18n/pt-BR.md#controllers)

Abaixo definições:

**Remover lógica do controller**

O controller deve ser o responsável por buscar os dados e passa-los para a view, ou seja, nele não deve conter as regras de negócio e operações lógicas. Para isso crie services ou factories.