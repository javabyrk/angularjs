var app = angular.module("MyApp", []);

app.controller("MyCtrl", function($scope) {
  $scope.users = [1,4,9];
  $scope.newuser='';
  
  $scope.create = function(){
	if($scope.newuser!='')
		$scope.users.push($scope.newuser);
	$scope.newuser='';
  };
  
});
