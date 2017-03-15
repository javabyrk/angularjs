var app = angular.module("MyApp", []);

app.controller("MyCtrl", function($scope, $http) {

	$scope.message = '';
	$scope.smessage = '';

	$scope.getMessageFromServer = function() {

		$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

		$http.post('http://localhost:8080/Ex2/myServlet','message=' + $scope.message).
		success(function(data) {
			$scope.smessage = data;
		}).error(function(error) {
			$scope.smessage = {};
		});
	};

});












Object.toparams = function ObjecttoParams(obj) {
	var p = [];
	for ( var key in obj) {
		p.push(key + '=' + encodeURIComponent(obj[key]));
	}
	return p.join('&');
};