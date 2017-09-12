var app = angular.module("myapp", []);

app.controller("mycontroller", function ($scope) {

    $scope.fields = [{ name: 'phone', type: 'text', label: 'Phone' },{ name: 'password', type: 'password', label: 'Password' }];

});


app.directive('myDirective', function () {

    return {

        restrict: 'E',

        replace: 'true',
     
         link:function(scope,element,attr,controller){
            var markup = '<h3>Hello world </h3>';
            angular.element(element).html(markup);
         }

    };

});