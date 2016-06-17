function historiqueController ($scope, $window, historiqueService) {
	$('body').css('background-image', 'none');

	

	function load (){
		historiqueService.findAll().then(function(res){
			$scope.users = res.data;
		})
	}
	load();
	
}