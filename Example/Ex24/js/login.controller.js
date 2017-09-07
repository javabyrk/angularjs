angular.module('UserApp').controller('LoginController', function () {

	var self = this;

	self.user = {};

	self.login = function(){
		console.log(self.user);
	}

});