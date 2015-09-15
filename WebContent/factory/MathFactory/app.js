var mathApp = angular.module('MathApplication', [ 'MathServiceModule' ]);
mathApp.controller('mathController', [
		'$scope',
		'MathService',
		function($scope, MathService) {
		
			$scope.addResult = MathService.add($scope.Value1, $scope.Value2);
			$scope.Calculate = function($scope) 
			{
				this.addResult = MathService.add(this.Value1, this.Value2);
				this.subResult = MathService.subract(this.Value1, this.Value2);
				this.multiplyResult = MathService.multiply(this.Value1,this.Value2);
				this.divisionResult = MathService.divide(this.Value1,this.Value2);
				this.moduloResult = MathService.modulo(this.Value1, this.Value2);
				
			};
			/*
			 * console.log(MathService.add(5, 2));
			 * console.log(MathService.subract(5, 2));
			 * console.log(MathService.multiply(5, 2));
			 * console.log(MathService.divide(5, 2));
			 * console.log(MathService.modulo(5, 2));
			 */
		} ]);
