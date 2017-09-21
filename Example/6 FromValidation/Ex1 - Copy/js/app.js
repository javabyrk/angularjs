  angular.module('studentApp', ['ngMessages'])
    .controller('studentController', function($scope) {

    	$scope.username ="";

      $scope.verify = function() {
        console.log($scope.username.length!=0);
      };
     
    });