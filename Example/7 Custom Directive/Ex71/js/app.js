var app = angular.module("app", []);

app.controller("ProductController", function ($scope) {

    $scope.product = {

        name: '',

        price: '',

        stock: ''

    };

});


app.directive('inventoryProduct', function () {

    return {

        restrict: 'E',

        scope: {

            name: '@',

            price:'@'

        },

        template: '<input type="text" ng-model="name">{{name}} costs {{price}}'

    };

});