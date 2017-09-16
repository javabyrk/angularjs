
angular.module('StudentApp').controller('OwnerUpdateController', ['OwnerService', function (OwnerService) {
	
	var self = this;
	self.owner = {};
	self.errorMessage = '';

	self.loadData=function(){
		// service call
		OwnerService.getOwnerById(self.owner.id).then(function(serverdata){
			console.log(serverdata);
			self.owner = serverdata.data;
		},function(error){
			console.log(error);
			self.errorMessage = 'Server data insertion failed';
		});
	}

	self.update=function(){
		// service call
		OwnerService.updateOwner(self.owner).then(function(serverdata){
			console.log(serverdata);
		},function(error){
			console.log(error);
			self.errorMessage = 'Server data insertion failed';
		});
	}

}])