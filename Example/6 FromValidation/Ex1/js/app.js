  angular.module('studentApp', ['ngMessages'])
    .controller('studentController', function($scope) {

    	$scope.password ="";
    	$scope.verification = true;
    	$scope.confirmPassword = '';
      $scope.verify = function() {
        if($scope.password!='')
        	$scope.verification = false;
        else{
        	$scope.verification = true;
        	$scope.confirmPassword = '';
        }
      };
     
    });