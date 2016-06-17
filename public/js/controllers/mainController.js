// MAIN CONTROLLER
function mainController($scope, $http, todoService) {
	$('body').css('background-image', 'none').css('background-image','url("./assets/van.jpg")');
	$scope.title = "Holi-Friends";
	$scope.formConnecte = '1';
	
	
	function load(){
		todoService.get().then(function(res){
			$scope.todos = res.data;
		});
	}
	$scope.add = function(){
		var data = {};
		data.description = $scope.description;
		todoService.create(data).then(function(res){
			load();
		});
		$scope.description = "";
	}
	$scope.update = function(todo){
		todoService.update(todo._id, todo).then(function(res){
			load();
		});
	}
	$scope.delete = function(todo){
		todoService.delete(todo._id).then(function(res){
			load();
		});
	}
	load();
}
