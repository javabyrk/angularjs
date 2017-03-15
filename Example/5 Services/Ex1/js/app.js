var app = angular.module("MyApp", []);

app.controller("MyCtrl", function($scope) {
   
    $scope.countries = ["india","us"];
	$scope.country = '';	
	$scope.states = [];
	$scope.indiastates = ["AP","TN","MH","PJ"];
	$scope.usstates = ["Florida","NewYork","WashingTon","California"];
	$scope.state = '';
	
	$scope.getStates = function() {
		if($scope.country=='india')
			$scope.states = $scope.indiastates;
		else if($scope.country=='us')
			$scope.states = $scope.usstates;
		else
			$scope.states = [];
	};
    
});
