var app = angular.module("app", []);

app.controller("ProductController", function ($scope) {

    $scope.fields = [{ name: 'phone', type: 'text', label: 'Phone' },{ name: 'password', type: 'password', label: 'Password' }];

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