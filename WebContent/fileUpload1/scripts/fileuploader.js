var fileUploaderModule = angular.module('fileUploaderModule', []);

fileUploaderModule.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

fileUploaderModule.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        .error(function(){
        });
    }
}]);

fileUploaderModule.controller('fileController', ['$scope', 'fileUpload', function($scope, fileUpload){
    
    $scope.uploadFile = function()
    {
        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        var uploadUrl = "/fileUpload"; 
        fileUpload.uploadFileToUrl(file, uploadUrl);
        console.log("uploadUrl in fileuploader.js points to the url, Set your web service url There. It ll upload")
        $scope.message = "Press f12 to see Status..";
    };
    
}]);
