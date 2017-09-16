
angular.module('StudentApp').controller('OwnerDeleteController', ['OwnerService', function (OwnerService) {
	
	var self = this;
	self.owner = {};
	self.errorMessage = '';

	self.delete=function(){
		// service call
		OwnerService.deleteOwner(self.owner.id).then(function(serverdata){
			console.log(serverdata);
		},function(error){
			console.log(error);
			self.errorMessage = 'Server data delete failed';
		});
	}

}])