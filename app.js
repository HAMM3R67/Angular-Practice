angular.module('App', [])
.controller('myCtrl', function($scope){
	$scope.helloWorld = 'Hello World';
	$scope.collection = [
		{
		name: 'Ben',
		age: 23
		},{
		name: 'Mike',
		age: 24	
		},{
		name: 'Trevor'
		age: 28	
		}];
		
		$scope.alerter= function (){
			
		}
});