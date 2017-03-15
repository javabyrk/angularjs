var myApp = angular.module('userApp', []);

myApp.controller('UserCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.users = [];
  $scope.newUser = {};

  $http.get('data/users.json').success(function(data) {
    $scope.users = data;
  });

  $scope.addUser = function() {
    var newUser = $scope.newUser;
    newUser.state = "normal";
    newUser.index = $scope.users.length;
    $scope.users.push(newUser);
    $scope.newUser = {};
  };

}]);
