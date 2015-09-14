var myFileUpload = angular.module('fileUpload', []);
myFileUpload.controller('fileUploadController', function($scope, $http) {

	$scope.uploadFile = function(files) {
		var FileData = new FormData();
		FileData.append("file", files[0]);

		$http.post("https://www.google.co.in/", FileData, {
			withCredentials : true,
			headers : {
				'Content-Type' : undefined
			},
			transformRequest : angular.identity
		}).success("Success").error("Failure");
	};

});
