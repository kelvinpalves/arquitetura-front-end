# Padrão de Interface

Padrão dos componentes que serão utilizados para o desenvolvimento da aplicação.

## Menu

**Navegador no Topo da Página**

Menu de navegação no topo da página, utilizar para notificações e para links cuja ação seja referente ao usuário que está acessando o sistema.

Exemplo:

![Exemplo Menu Escondido](https://github.com/kelvinpalves/arquitetura-front-end/blob/master/interface/imagens/menu-topo.png "Exemplo de Menu Escondido")

**Navegador no Lado Esquerdo**

Menu de navegação no lado esquerdo da página, utilizar para adicionar os links do sistema. O menu deverá ser distruído por módulos e agrupados por suas funcionalidades.

Exemplo:

![Exemplo Menu Escondido](https://github.com/kelvinpalves/arquitetura-front-end/blob/master/interface/imagens/menu.png "Exemplo de Menu Escondido")

**Navegador no Lado Esquerdo (Escondido)**

Menu de navegação no lado esquerdo da página exibindo somente os ícones. (Otimiza a área de trabalho)

![Exemplo Menu Escondido](https://github.com/kelvinpalves/arquitetura-front-end/blob/master/interface/imagens/menu-escondido.png "Exemplo de Menu Escondido")

## Página com Lista

![Exemplo de Imagem Com Lista](https://github.com/kelvinpalves/arquitetura-front-end/blob/master/interface/imagens/pagina-com-lista.png "Exemplo de Imagem com Lista")

Está tela será a padrão para listar os registros de uma CRUD.

**Botão para Uso Geral**

No canto superior alinha à direita, deverá conter os botões que possuem uma ação geral.

No exemplo acima possui o botão de novo, que será responsável por redirecionar para o formulário de cadastro.

**Primeira Coluna**

Na primeira coluna da tabela será adicionado um *checkbox* para selecionar itens antes de efetuar uma ação.

Exemplo: Selecionar 5 registros e remove-los.

**Última Coluna**

A última coluna da tabela será responsável por exibir os botões que possuem as ações que podem ser tomadas.

No exemplo acima possui as opções de editar e remover.

**DataTable**

Deverá ser desenvolvido retornando apenas o que está visível na página atual, conforme parâmetros informados pelo usuário.

Plugin utilizado: [angular-datatables](https://l-lin.github.io/angular-datatables/)

## Formulário 

![Exemplo de Imagem Com Formulário](https://github.com/kelvinpalves/arquitetura-front-end/blob/master/interface/imagens/pagina-formulario.png "Exemplo de Imagem com Formulário")

## Exemplos Desenvolvidos

*	Página em Branco
*	Página com Formulário
*	Página com Lista