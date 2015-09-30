var myTestModule = angular.module('moduleOne', []);
var myTestTwoModule = angular.module('moduleTwo', []);
var myTestThreeModule = angular.module('moduleThree', []);

myTestModule.controller('controllerOne', ['$scope', function($scope) {
	console.log("Inside Controller One..");
	$scope.clickedSubmit = function($scope) 
	{
		this.tfOne = this.textField1;
		this.tfTwo = this.textField2;
		console.log(this.textField1);
		console.log(this.textField2);
	};
}, ]);

myTestModule.controller('controllerTwo', ['$scope', function($scope) {
	console.log("Inside Controller Two..");
	$scope.clickedSubmit = function($scope) {
		this.tfThree = this.textField3;
		this.tfFour = this.textField4;
		console.log(this.textField3);
		console.log(this.textField4);
	};
}, ]);

myTestModule.controller('controllerThree', ['$scope', function($scope) {
	console.log("Inside Controller Three..");
	$scope.clickedSubmit = function($scope) {
		this.tfFive = this.textField5;
		this.tfSix = this.textField6;
		console.log(this.textField5);
		console.log(this.textField6);
	};
}, ]);
