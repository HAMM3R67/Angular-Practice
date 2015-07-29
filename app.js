angular.module('App', [])
.controller('myCtrl', function($scope){
	$scope.helloWorld = 'Hello World';
	$scope.collection = [1, 2, 3, 4, 5];
});