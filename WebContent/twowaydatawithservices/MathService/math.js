var matServiceObj = angular.module('MathServiceModule', []);
matServiceObj.service('MathService', function() {
	this.add = function(x, y) 
	{
		return x + y;
	};

	this.subract = function(x, y) {
		return x - y;
	};

	this.multiply = function(x, y) {
		return x * y;
	};

	this.divide = function(x, y) {
		return x / y;
	};

	this.modulo = function(x, y) {
		return x % y;
	};
});
