var app = angular.module("MyApp", []);

app.controller("MyCtrl", function($scope,$http) {
   
    $scope.countries = ["india","us"];
	$scope.country = '';	
	$scope.states = [];
	$scope.state = '';
	
	$scope.getStates = function() {
		$http.get('http://localhost:8080/AjaxEx/getStates?country='+$scope.country)
			.success(function(data) {
				$scope.states = angular.fromJson(data);
			}).error(function(error) {
				$scope.states = {};
			});
	};
    
});
