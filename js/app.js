var app = angular.module('myApp', ['jcs-autoValidate']);

app.run(function(defaultErrorMessageResolver){
	defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages){
		errorMessages['badUsername'] = "Username is missing a letter or number";
		errorMessages['badPassword'] = "Password need one Uppercase, one Lower case and a Number";
		errorMessages['invalidNumber'] = "Please enter valid numer with are code (123)-123-1234"
	});
});

app.controller('FormValidationController', function($scope, $http){
	$scope.formModel = {};
	$scope.onSubmit = function(valid){
		if(valid){
			console.log("i am submitted");
			console.log($scope.formModel);
		}else{
			console.log("invalid entry");
		}
		// $http.post('https://here.comes.the/api/youwant/', $scope.formModel).success(function(data){
		// 	console.log("done");
		// }).error(function(data){
		// 	console.log("an errror")
		// });
	};
});
