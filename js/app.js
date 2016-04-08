var app = angular.module('myApp', []);
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
