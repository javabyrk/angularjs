// Create the application module
var myApp = angular.module('userApp', []);

// Create the UserCtrl controller
myApp.controller('UserCtrl', function($scope,$http) {

  // Models (i.e. data)
  $scope.users = [
				{
					"name": "Student1",
					"city": "Hyderabad"
				},
				
				{
					"name": "Student2",
					"city": "Bangalore"
				},
				
				{
					"name": "Student3",
					"city": "Hyderabad"
				},
				
				{
					"name": "Student4",
					"city": "Chennai"
				}
			];  
							
  $scope.userFilter = {};

});
