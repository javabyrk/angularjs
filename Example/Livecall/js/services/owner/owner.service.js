angular.module('StudentApp').service('OwnerService', 
						['$http',function ($http) {
	this.getOwners = function(){
		return $http.get("http://localhost:8080/petclinic/api/owner");
	}	
}])
