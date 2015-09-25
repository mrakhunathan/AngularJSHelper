var PersonManager = function() {
	return {
		$get : function(person) {
			return {
				getPersonFirstName : function() {
					return person.firstName;
				},
				getPersonLastName : function() {
					return person.lastName;
				},
				getPersonFullName : function(separator) {
					return person.firstName + separator + person.lastName;
				}
			};
		}
	};
};

var providerModule = angular.module("mainModule", []);

providerModule.value("person", {
	firstName : "",
	lastName : ""
});


providerModule.provider("personManager", PersonManager);

providerModule.controller("mainController", function($scope, person, personManager) {
	
	person.firstName = "John";
	person.lastName = "Doe";

	$scope.personInstance = person;
	$scope.personManagerInstance = personManager;
});