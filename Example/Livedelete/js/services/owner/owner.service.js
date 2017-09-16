angular.module('StudentApp').service('OwnerService', 
						['$http',function ($http) {
	this.getOwners = function(){
		return $http.get("http://localhost:8080/petclinic/api/owners");
	}
	this.insertOwner = function(owner){
		return $http.post("http://localhost:8080/petclinic/api/owners",owner);
	}
	this.updateOwner = function(owner){
		return $http.put("http://localhost:8080/petclinic/api/owners/"+owner.id,owner);
	}
	this.getOwnerById = function(id){
		return $http.get("http://localhost:8080/petclinic/api/owners/"+id);
	}
	this.deleteOwner = function(id){
		return $http.delete("http://localhost:8080/petclinic/api/owners/"+id);
	}	
}])
