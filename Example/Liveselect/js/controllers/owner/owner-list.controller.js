
angular.module('StudentApp').controller('OwnerListController', ['OwnerService', function (OwnerService) {
	
	var self = this;
	self.owners = [];
	self.errorMessage = '';

	self.load=function(){
		// service call
		OwnerService.getOwners().then(function(serverdata){
			self.owners = serverdata.data;
			console.log(serverdata);
		},function(error){
			console.log(error);
			self.errorMessage = 'Server data loading failed';
		});
	}

}])