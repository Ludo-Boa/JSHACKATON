function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
		})
		.when('/about', {
			templateUrl: 'views/about.html'
		})
		.when('/voyage', {
			templateUrl: 'views/voyage.html',
			controller: 'voyageController'
		})
		.when('/historique', {
			templateUrl: 'views/historique.html',
			controller: 'historiqueController'
		})
		.when('/road', {
			templateUrl: 'views/road.html',
			controller: 'roadController'
		})
		.otherwise({
			redirectTo: '/'
		});
}
function run($rootScope, $location){
	var path = function() { return $location.path(); };
	$rootScope.$watch(path, function(newVal, oldVal){
		$rootScope.activetab = newVal;
	});
}
angular.module('app', ['ngRoute'])
    .config(config)
    .controller('mainController', mainController)
    .controller('voyageController', voyageController)
    .controller('historiqueController', historiqueController)
    .controller('roadController', roadController)
    .service('todoService', todoService)
    .service('voyageService', voyageService)
    .service('historiqueService', historiqueService)
    .service('roadService', roadService)
    /*.factory('', )*/
    .run(run);

