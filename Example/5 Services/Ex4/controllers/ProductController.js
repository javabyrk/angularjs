myApp.controller("ProductController", function($scope, TestService)

{
	$scope.pName = "Printer";
	$scope.pPrice = "3500";
	$scope.qty = 1;
	$scope.result = 0;
	$scope.getTotal = function() {

		$scope.result = TestService.multiply($scope.pPrice, $scope.qty)
	};
});
