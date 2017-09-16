
angular.module('StudentApp').controller('OwnerDetailController', ['OwnerService', function (OwnerService) {
	
	var self = this;
	self.owner = {};
	self.errorMessage = '';

	self.insert=function(){
		// service call
		self.owner.id='';
		OwnerService.insertOwner(self.owner).then(function(serverdata){
			console.log(serverdata);
		},function(error){
			console.log(error);
			self.errorMessage = 'Server data insertion failed';
		});
	}

}])