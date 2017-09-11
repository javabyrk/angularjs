angular.module('UserApp').controller('ForgotPasswordController', function (UserService) {

	var self = this;

	self.user = {};

	self.forgotPassword = function(){
		UserService.forgotPassword(self.user);
	}

});