var mathApp = angular.module('MathApplication', [ 'MathServiceModule' ]);
mathApp.controller('mathController', [
		'$scope',
		'MathService',
		function($scope, MathService) 
		{
			
			$scope.fun = function()
			{
			this.addResult = MathService.add(this.Value1, this.Value2);
			this.subResult = MathService.subract(this.Value1, this.Value2);
			this.multiplyResult = MathService.multiply(this.Value1,this.Value2);
			this.divisionResult = MathService.divide(this.Value1,this.Value2);
			this.moduloResult = MathService.modulo(this.Value1, this.Value2);
				console.log("Fun....");
			}
		} ]);
