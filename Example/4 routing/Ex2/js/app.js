
var StudentApp = angular.module('StudentApp', ['ngRoute','StudentControllers']);

StudentApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'views/list.html',
    controller: 'ListController'
  }).
  when('/details/:sdIndex', {
    templateUrl: 'views/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);