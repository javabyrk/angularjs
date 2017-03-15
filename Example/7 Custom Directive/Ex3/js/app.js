var app = angular.module("app", []);

app.controller('StudentController', ['$scope', function ($scope) {

    $scope.student = {

        name: "Student1",

        age: 25
	};	

 }]);


app.directive('studentDirective', function () {

    return {

        template: "<input type='text' ng-model='student.name'>{{student.name}} is {{student.age}} years old !!",

        restrict: 'E'

    }

});