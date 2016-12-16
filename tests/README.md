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

**O que é?**

Teste funcional, são os testes responsáveis por validar um conjunto de unidades.

**Objetivos:**

Mostrar que a junção das unidades atende corretamente a especificação.

**Protractor:**

Protractor é um framework para realizar testes de ponta a ponta em aplicações AngularJS. O framework executa o sistema em um browser, interagindo com os itens como se fosse um usuário real.

**Exemplo:**

Configuração:

```js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js']
};
```

Teste:

```js
describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('https://angularjs.org');

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
});
```

**Repositório**

Criei um repositório com exemplo de teste e2e realizado com Protractor em uma aplicação desenvolvida em AngularJS, o mesmo pode ser acessado através deste [link](https://github.com/kelvinpalves/e2e-angular).

[Voltar Para Raiz](https://github.com/kelvinpalves/arquitetura-front-end)