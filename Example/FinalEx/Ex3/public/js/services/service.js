angular.module('service', [])

	// super simple service
	// each function returns a promise object 
	.factory('Students', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/students');
			},
			create : function(studentData) {
				return $http.post('/api/insertStudent', studentData);
			},
			delete : function(id) {
				return $http.delete('/api/deleteStudent/' + id);
			},
			getStudent : function(id) {
				return $http.get('/api/getStudent/'+id);
			}
		}
	}]);