var app = angular.module("app", []);

app.controller("ProductController", function ($scope) {

    $scope.fields = [
    { name: 'email', type: 'text', label: 'Email' },                
    { name: 'password', type: 'password', label: 'Password' },
     { name: 'genpassword', type: 'password', label: 'GenPassword' }];

});


app.directive('fieldDirective', function () {

    return {

        restrict: 'E',

        scope: {

            name: '@',

            type:'@',
			
			label:'@'

        },

        template: '{{label}}:<input type="{{type}}" name="{{name}}"/>'

    };

});