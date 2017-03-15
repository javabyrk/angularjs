var app = angular.module("MyApp", []);

app.controller("MyCtrl", function($scope) {
  $scope.users = ["student1", "student2", "student3"];
});
