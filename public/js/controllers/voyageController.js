function voyageController ($scope, $window, voyageService) {
	$('body').css('background-image', 'none').css('background-image','url("./assets/bag.jpg")');

	

	$scope.getTotal = function(){
    var total = 0;
    }

	function load (){
		voyageService.findAll().then(function(res){
			$scope.users = res.data;
		})
	}
	load();
	$scope.add = function () {
		var data = {};
		data.nameHoli = $scope.nameHoli;
		data.destHoli = $scope.destHoli;
		data.dateHoli = $scope.dateHoli;
		data.dayHoli = $scope.dayHoli;
		data.firstnameFriend = $scope.firstnameFriend;
		data.lastnameFriend = $scope.lastnameFriend;
		data.emailFriend = $scope.emailFriend;
		data.budget = $scope.budget;
		data.prix1 = $scope.prix1;
		data.prix2 = $scope.prix2;
		voyageService.ajouter(data).then(function(){
			load();
		});
	}

	$scope.update = function (user){
		voyageService.update(user._id, user);
	}

	$scope.delete = function (id){
		voyageService.delete(id).then(function(){
			load();
		});
	}
}