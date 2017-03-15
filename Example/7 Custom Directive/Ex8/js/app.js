var app = angular.module("app", []);

app.directive('inputDirective', function () {

    return {
		template: "UserName: <input type='text' name='userName' />",        

        restrict: 'E'       

    };

});