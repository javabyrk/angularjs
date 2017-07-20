angular.module("loginApp",[]);


angular.module("loginApp").controller("loginController",function($scope){

    $scope.username='';
    $scope.password='';

    $scope.login=function(){
    	console.log($scope.username);
    	console.log($scope.password);
    }


});