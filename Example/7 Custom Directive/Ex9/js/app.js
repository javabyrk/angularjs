var app = angular.module("app", []);

app.controller("ProductController", function ($scope) {

    $scope.field = { name: 'phone', type: 'text', label: 'Phone' };

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