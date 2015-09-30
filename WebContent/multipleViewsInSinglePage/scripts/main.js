routeApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/Cat', {
		templateUrl : 'basefiles/Page1.html',
		controller : 'animalController'
	})

	.when('/Dog', {
		templateUrl : 'basefiles/Page2.html',
		controller : 'animalController'
	})

	.when('/Donkey', {
		templateUrl : 'basefiles/Page3.html',
		controller : 'animalController'
	}).otherwise({
		redirectTo : '/Cat'
	})
} ]);

routeApp.controller('animalController', function($scope) 
{
	$scope.currentTime = Date();
	console.log($scope.currentTime);
	console.log("Inside Animals");
});