var StudentControllers = angular.module("StudentControllers", []);

StudentControllers.controller("ListController", ['$scope','$http', 
	function($scope, $http)
		{    
			$http.get('js/data.json').success (function(data){
				$scope.Students = data;
			}); 
		}]
);

StudentControllers.controller("DetailsController", ['$scope','$http','$routeParams',
	 function($scope, $http, $routeParams)
		{    
			$http.get('js/data.json').success (function(data){
				$scope.Students = data;
				$scope.whichStudent  = $routeParams.sdIndex;
			}); 
		}]
);