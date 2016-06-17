function roadController ($scope, $window, roadService) {
	$('body').css('background-image', 'none').css('background-image','url("./assets/beach.jpg")');

	

	function load (){
		roadService.findAll().then(function(res){
			$scope.voyages = res.data;
		})
	}
	load();
	
}