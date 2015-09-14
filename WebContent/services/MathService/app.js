var mathApp = angular.module('MathApplication',['MathServiceModule']);
mathApp.controller('mathController',['MathService',function(MathService)
		{
			console.log(MathService.add(2,2));
		}]);
