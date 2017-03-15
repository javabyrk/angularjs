// Create the application module
var myApp = angular.module('userApp', []);

// Create the UserCtrl controller
myApp.controller('UserCtrl1',function($scope) {

  // Models (i.e. data)
  $scope.values1 = ['true','false'];

 
});

// Create the UserCtrl controller
myApp.controller('UserCtrl2',function($scope) {

  // Models (i.e. data)
  $scope.values2 = ['param1','param2'];

 
});
