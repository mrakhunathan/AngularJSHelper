var mouseEventModule = angular.module('mouseEvents', []);
mouseEventModule.controller('mouseController', [ '$scope', function($scope) {
	$scope.onClick = function() {
		console.log("Clicked");
		$scope.onDblClickResult = "DOUBLE-CLICKED";
	};

	$scope.onClick = function(event) {
		console.log("Mouse Clicked...");
		console.log("X=" + event.clientX + ",Y=" + event.clientY);
	};

	$scope.onDoubleClick = function(event) {
		console.log("Mouse DoubleClicked...");
		console.log("X=" + event.clientX + ",Y=" + event.clientY);
	};

	$scope.onMouseDown = function(event) {
		console.log("Mouse Down...");
		console.log("X=" + event.clientX + ",Y=" + event.clientY);
	};

	$scope.onMouseUp = function(event) {
		console.log("Mouse Up...");
		console.log("X=" + event.clientX + ",Y=" + event.clientY);
	};

	$scope.onMouseEnter = function(event) {
		console.log("Mouse Enter...");
		console.log("X=" + event.clientX + ",Y=" + event.clientY);
	};

	$scope.onMouseLeave = function(event) {
		console.log("Mouse Leave...");
		console.log("X=" + event.clientX + ",Y=" + event.clientY);
	};

	$scope.onMouseOver = function(event) {
		console.log("Mouse Over...");
		console.log("X=" + event.clientX + ",Y=" + event.clientY);
	};

	$scope.onMouseOut = function(event) {
		console.log("Mouse Over...");
		console.log("X=" + event.clientX + ",Y=" + event.clientY);
	};

	$scope.onMouseMove = function(event) {
		//console.log("Mouse Moved...");
		//console.log("X=" + event.clientX + ",Y=" + event.clientY);
	};

} ]);