# Testes de Software

## Teste Unitário

**O que é?**

Testes unitários, são os testes responsáveis por validar unidades individuais de código fonte. A unidade a ser testada deve ser definida pelo desenvolvedor, podendo ser métodos, classes, funcionalidades, requisitos.

**Objetivos:**

Mostrar que uma unidade atende corretamente a sua especificação.

**Jasmine:**

Jasmine é um framework behavior-driven desenvolvido para testar aplicações em javascript.

É possível executar os testes via linha de comando ou pelo browser com interface gráfica.

**Exemplo:**

```js
describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });
});

```

**Repositório**

Criei um repositório com exemplo de teste unitário realizado com Jasmine em uma aplicação desenvolvida em AngularJS, o mesmo pode ser acessado através deste [link](https://github.com/kelvinpalves/unit-testing-angular).

## Teste Funcional

## Teste de Usabilidade