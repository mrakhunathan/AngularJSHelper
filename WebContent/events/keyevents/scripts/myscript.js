var keyEventMod = angular.module('keyEvents',[]);
keyEventMod.controller('keyController',['$scope',function($scope)
		{
			$scope.onKeyDown = function(event)
			{
				console.log("Key Down......");
				console.log(event.keyCode); 
			},
			$scope.onKeyUp = function(event)
			{
				console.log(event.keyCode); 
				console.log("Key Up......");
			},
			$scope.onKeyPress = function(event)
			{
				console.log(event.keyCode); 
				console.log("Key Press......");
			}
		}]);