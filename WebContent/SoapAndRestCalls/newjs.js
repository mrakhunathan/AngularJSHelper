var newmod = angular.module('newModule', ['angularSoap']);
newmod.controller('newController', function ($scope, newService, testService) {
    console.log('newController in..');
    newService.myFunction();
    newService.restCaller().then(function (d) {
        $scope.restCallResult = d;
    });
    console.log("$scope.restCallResult=" + $scope.restCallResult);

    testService.HelloWorld().then(function (response) {
        $scope.response = response;
        console.log($scope.response);
    });
});

newmod.service('newService', function ($http) {
    console.log('newService..');
    this.myFunction = function () {
        console.log("this.MyFunction....");
    };
    this.restCaller = function () {
        var promise = $http({
            method: 'GET',
            url: "http://localhost:8383/getAllRcs",
            headers: {
                'Content-Type': undefined
            }
        }).then(function (response) {
            console.log(response.data);
            return response.data;
        });
        return promise;
    };
});

newmod.factory("testService", [
    '$soap', function ($soap) {
        var base_url = "http://localhost:2002/Soap/NewWebService";
        return {
            HelloWorld: function () {
                return $soap.post(base_url, "hello");
            }
        }
    }
]) 