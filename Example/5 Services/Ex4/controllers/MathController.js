myApp.controller("MathController", function($scope,TestService)

{
	$scope.x = 10;
	$scope.y = 20;
	$scope.result =0;

	$scope.getSum = function() {

		$scope.result = TestService.sum($scope.x, $scope.y);
	};

	$scope.getMultiply = function() {
		$scope.result = TestService.multiply($scope.x, $scope.y);
	};

});
