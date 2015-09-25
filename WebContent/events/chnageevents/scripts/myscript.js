var changeEventMod = angular.module('changeEvents',[]);
changeEventMod.controller('chageController',['$scope',function($scope)
		{
			$scope.tfChange = function()
			{
				console.log("Text Field Chnaged...");
				console.log($scope.tfld);
			},
			
			$scope.checkBoxChanged = function()
			{
				console.log("CheckBox Chnaged...");
				$scope.getStatus();
			},
			
			$scope.getStatus = function()
			{
				$scope.Checkbox1 = $scope.Chk1 ? "SELECTED" : "NOT SELECTED";
				$scope.Checkbox2 = $scope.Chk2 ? "SELECTED" : "NOT SELECTED";
			}
		}]);