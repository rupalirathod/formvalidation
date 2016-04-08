var app = angular.module('myApp', ['jcs-autoValidate', 'angular-ladda']);

app.run(function(defaultErrorMessageResolver){
	defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages){
		errorMessages['badUsername'] = "Username is missing a letter or number";
		errorMessages['badPassword'] = "Password need one Uppercase, one Lower case and a Number";
		errorMessages['invalidNumber'] = "Please enter valid numer with are code (123)-123-1234"
	});
});

app.controller('FormValidationController', function($scope, $http){
	$scope.formModel = {};
	$scope.submitting = false;
	$scope.onSubmit = function(valid){
		$scope.submitting = true;

		if(valid){
			console.log("i am submitted");
			console.log($scope.formModel);

		}else{
			console.log("invalid entry");
		}
		$http.post('https://here.comes.the/api/youwant/', $scope.formModel).success(function(data){
			console.log("done");
			$scope.submitting = false;
		 }).error(function(data){
			console.log("an errror")
	 });
	};
});
