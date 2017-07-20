angular.module('studentApp', ['controller', 'service','ngRoute']);

angular.module('studentApp').config(function($routeProvider) {

	$routeProvider.when("/list", {
		templateUrl : "views/list.html",
		controller: 'studentListController'
	});

	$routeProvider.when("/select", {
		templateUrl : "views/dropdowndata.html",
		controller: 'studentListController'
	});

	$routeProvider.when("/insert", {
		templateUrl : "views/insert.html",
		controller: 'studentInsertController'
	});

	$routeProvider.when("/delete/:id", {
		templateUrl : "views/delete.html",
		controller: 'studentDeleteController'
	});

	$routeProvider.otherwise( {
		templateUrl : "views/home.html"
	});
});

