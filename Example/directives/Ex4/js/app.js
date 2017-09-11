var app = angular.module("app", []);

app.controller("ProductController", function ($scope) {

     $scope.products = [{

        name: 'Phone',

        price: '100',

        stock: true

    },{

        name: 'TV',

        price: '1000',

        stock: false

    },{

        name: 'Laptop',

        price: '800',

        stock: false

    }];

 

});


app.directive('inventoryProduct', function () {

    return {

        restrict: 'E',

        scope: {

            data: '='

        },

        template: '{{data.name}} costs {{data.price}}'

    };

});