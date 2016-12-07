(function () {
	'use strict';

	angular
		.module('app')
		.factory('somar', somar);

	function somar() {
		var service = {
			executar: executar
		};

		return service;

		function executar(numero1, numero2) {
			return parseInt(numero1) + parseInt(numero2);
		}
	}
})();