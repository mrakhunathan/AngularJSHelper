var thisApp = angular.module('One',['newModule']);
thisApp.controller('oneController',['$scope','newService',function($scope,newService)
		{
			newService.myFirstOne();
		}]);