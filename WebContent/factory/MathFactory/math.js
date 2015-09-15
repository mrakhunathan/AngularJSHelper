var matServiceObj = angular.module('MathServiceModule', []);
matServiceObj.factory('MathService', function() 
{
	return{
		add: function(x, y) 
		{
			return x + y;
		},

		subract: function(x, y) {
			return x - y;
		},

		multiply: function(x, y) {
			return x * y;
		},

		divide: function(x, y) {
			return x / y;
		},

		modulo: function(x, y) {
			return x % y;
		}
	}
});
