angular.module("loginApp",[]);


angular.module("loginApp").controller("loginController",function($scope){

	var loginCtrl = this;
	
    loginCtrl.user={};

    loginCtrl.login=function(){
    	console.log(loginCtrl.user.username);
    }


});