angular.module('StudentApp').controller("StudentController1",function($scope){

	$scope.message = "hello world";

});

angular.module('StudentApp').controller("StudentController2",function(){

	var self = this;

	self.message = "welcome";

});