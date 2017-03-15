// Create the application module
var myApp = angular.module('userApp', []);

// Create the UserCtrl controller
myApp.controller('UserCtrl', function($scope) {

  // Models (i.e. data)
  $scope.users = [];
				
  $scope.newUser = {};

  $scope.addUser = function() {
    $scope.users.push($scope.newUser);
    $scope.newUser = {};
  };

});
