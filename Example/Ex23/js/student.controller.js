angular.module('StudentApp').controller("StudentController1",function($scope){

	$scope.m1 = function(){
		console.log('in the m1 function');
		alert('in the m1 function');
	}

});

angular.module('StudentApp').controller("StudentController2",function(){

	var self = this;

	self.m1 = function(){
		console.log('in the m1 function');
		alert('in the m1 function');
	}

});