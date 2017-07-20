angular.module('controller', []);

	// inject the Student service factory into our controller
angular.module('controller').controller('studentListController', ['$scope','$http','Students', function($scope, $http, Students) {
		$scope.formData = {"id":1,"name":"satya"};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all students and show them
		// use the service to get all the students
		Students.get()
			.success(function(data) {
				$scope.students = data;
				$scope.loading = false;
			});
	}]);

	// inject the Student service factory into our controller
angular.module('controller').controller('studentInsertController', ['$scope','$http','Students','$location', function($scope, $http, Students,$location) {
		$scope.formData = {"id":1};
		$scope.loading = true;

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createStudent = function() {

				// call the create function from our service (returns a promise object)
				Students.create($scope.formData)

					// if successful creation, call our get function to get all the new students
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$location.path('/list');
					})
					.error(function(err) {
						$scope.loading = false;
						$scope.status = err.message; // clear the form so our user is ready to enter another
					});
			};

	}]);


	// inject the Student service factory into our controller
angular.module('controller').controller('studentDeleteController', ['$scope','$http','Students','$routeParams', function($scope, $http, Students,$routeParams) {
		$scope.student = {};
		$scope.loading = true;
		$scope.status = "";

				Students.getStudent($routeParams.id)

					// if successful creation, call our get function to get all the new students
					.success(function(data) {
						$scope.loading = false;
						if(data.length>0)
							$scope.student = data[0]; // clear the form so our user is ready to enter another
					});

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteStudent = function() {

			Students.delete($routeParams.id)
				// if successful creation, call our get function to get all the new students
				.success(function(data) {
					$scope.loading = false;
					$scope.status = data; 
				});
		};
	}]);