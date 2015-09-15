/*mathApp.service('Calculators',['$scope',function($scope)*/
mathApp.service('Calculators',[function()
{	
	//$scope.addResult = "sss";
	console.log("Inside Calculator Service..");
	this.calculate = function()
	{
		//$scope.addResult = "hello";
		console.log("Inside Calculate Service Method..");
	}
}]);
