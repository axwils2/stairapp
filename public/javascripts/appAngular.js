(function() {
	var app = angular.module('stair', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: "/templates/stairrail.html"
		})

		.when('/stairs', {
			templateUrl: "/templates/stairs/index.html"
		})
		
		.when('/rails', {
			templateUrl: "/templates/rails/index.html"
		})

		.when('/stairs/horseshoe', {
			templateUrl:"/templates/stairs/types/horseshoe.html"
		})

		.when('/stairs/left', {
			templateUrl:"/templates/stairs/types/left.html"
		})

		.when('/stairs/right', {
			templateUrl:"/templates/stairs/types/right.html"
		})

		.when('/stairs/straight', {
			templateUrl:"/templates/stairs/types/straight.html"
		})

		.when('/stairs/switchback', {
			templateUrl:"/templates/stairs/types/switchback.html"
		})

		.when('/stairs/draw', {
			templateUrl:"/templates/stairs/types/draw.html"
		})

		.when('/additional_notes', {
			templateUrl:"/templates/info/notes.html"
		})

		.when('/builderinfo', {
			templateUrl:"/templates/info/builderinfo.html"
		})

		.when('/review', {
			templateUrl: "/templates/info/review.html"
		});
	});

})();