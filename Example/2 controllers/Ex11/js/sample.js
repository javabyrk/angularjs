// Create the application module
var myApp = angular.module('userApp', []);

// Create the UserCtrl controller
myApp.controller('UserCtrl',function($scope) {

  // Models (i.e. data)
  $scope.values = ['true','false'];
  $scope.userValue = 'true';

 
});
