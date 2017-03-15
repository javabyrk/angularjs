var myApp = angular.module("myApp", []);

myApp.service("TestService", function()

{
	this.sum = function(x, y) {

		var z = parseInt(x) + parseInt(y);
		return z;

	}

	this.multiply = function(x, y) {

		var z = parseInt(x) * parseInt(y);

		return z;
	}

});
