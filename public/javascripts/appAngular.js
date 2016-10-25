(function() {
	var app = angular.module('stair', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: "/templates/stairrail.html"
		})

		.when('/stairs', {
			templateUrl: "/templates/stairs/index.html",
			controller: "TypeStairController"
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

	app.controller('ItemController', function($scope) {
		$scope.choices = options;
	}); 

	app.controller('TypeStairController', function($scope) {
		$scope.pics = s_pics;
	});


	var options = [
		{
			image: "/images/stairs.jpeg", 
			title: "Measuring Stairs?",
			link: "#/stairs"
		},
		{
			image: "/images/rails.png",
			title: "Measuring Rails?",
			link: "#/rails"
		}
	];

	var s_pics = [
		{
			image: "/images/switchback.png",
			title: "Switchback Stair"
		},
		{
			image: "/images/straight.png",
			title: "Straight Stair"
		},
		{
			image: "/images/left.png",
			title: "Left Turn Stair"
		},
		{
			image: "/images/right.png",
			title: "Right Turn Stair"
		},
		{
			image: "/images/horseshoe.png",
			title: "Horseshoe Stair"
		}
	];
})();