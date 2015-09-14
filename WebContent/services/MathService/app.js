var mathApp = angular.module('MathApplication', [ 'MathServiceModule' ]);
mathApp.controller('mathController', [ '$scope','Calculator','MathService',
		function($scope, Calculator, MathService) {
			console.log(MathService.add(5, 2));
			console.log(MathService.subract(5, 2));
			console.log(MathService.multiply(5, 2));
			console.log(MathService.divide(5, 2));
			console.log(MathService.modulo(5, 2));
		} ]);
