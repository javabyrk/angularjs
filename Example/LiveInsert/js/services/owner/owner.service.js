angular.module('StudentApp').service('OwnerService', 
						['$http',function ($http) {
	this.getOwners = function(){
		return $http.get("http://localhost:8080/petclinic/api/owners");
	}
	this.insertOwner = function(owner){
		return $http.post("http://localhost:8080/petclinic/api/owners",owner);
	}	
}])
