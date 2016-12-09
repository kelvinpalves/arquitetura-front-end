(function () {

	'use strict';

	angular
		.module('app')
		.controller('Exemplo', Exemplo);

	// Injeção de dependência.
	Exemplo.$inject = ['somar'];

	function Exemplo (somar) {
		/* jshint validthis: true */
		var vm = this;

		// Objetos e funções com bind no topo e ordenadas
		vm.executarSoma = executarSoma;
		vm.numero1;
		vm.numero2;
		vm.resultado = 0;
		// objeto sem o bind
		var totalDeSomas = 0;

		function executarSoma () {
			//Removendo a lógica de soma e a transferindo para uma factory. (somar.factory.js)
			vm.resultado = somar.executar(vm.numero1, vm.numero2);
			//Função privada
			totalizador();
		}

		function totalizador() {
			totalDeSomas++;
			console.log('Total de somas efetuadas: ' + totalDeSomas);
		}
	}
})();