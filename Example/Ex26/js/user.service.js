angular.module('UserApp').service("UserService",function(){

	this.isLoggedIn = false;

	this.login = function(user){
		console.log(user);

		this.isLoggedIn = true;

		// $http.post(url,user);
	}

	this.getUserStatus = function(){
		return this.isLoggedIn;
	}

	this.forgotPassword = function(user){
		console.log(user);
	}

	this.logOut = function(user){
		console.log(user);

		this.isLoggedIn = false;

		// $http.post(url,user);
	}

});