(function () {

	'use strict';

	angular
		.module('app')
		.controller('Exemplo', Exemplo);

	Exemplo.$inject = ['somar'];

	function Exemplo (somar) {

		var vm = this;

		vm.numero1;
		vm.numero2;
		vm.resultado = 0;
		vm.executarSoma = executarSoma;
				
		var totalDeSomas = 0;

		function executarSoma () {
			vm.resultado = somar.executar(vm.numero1, vm.numero2);
			totalizador();
		}

		function totalizador() {
			totalDeSomas++;
			console.log('Total de somas efetuadas: ' + totalDeSomas);
		}
	}
})();