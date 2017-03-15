var app = angular.module("app", []);

app.controller("ProductController", function ($scope) {

    $scope.product = {

        name: 'Phone',

        price: '100',

        stock: true

    };

});


app.directive('inventoryProduct', function () {

    return {

        restrict: 'E',

        scope: {

            name: '@',

            price:'@'

        },

        template: '{{name}} costs {{price}}'

    };

});