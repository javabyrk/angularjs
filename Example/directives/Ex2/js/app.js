var app = angular.module("app", []);

app.directive('myDirective', function () {

    return {
		template: "MY Directive",        

        restrict: 'EACM'       

    };

});