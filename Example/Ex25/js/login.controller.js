angular.module('UserApp').controller('LoginController', function (UserService) {

	var self = this;

	self.user = {};

	self.login = function(){
		UserService.login(self.user);
	}

});