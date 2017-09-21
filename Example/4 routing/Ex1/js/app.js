var app = angular.module("MyApp", ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider.when("/page1", {
		templateUrl : "page1.html"
	});

	$routeProvider.when("/page2", {
		templateUrl : "page2.html"
	});

	$routeProvider.otherwise( {
		templateUrl : "home.html"
	});
});
