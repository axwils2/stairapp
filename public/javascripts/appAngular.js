(function() {
	var app = angular.module('stair', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider.when('/stairs', {
			templateUrl: "/templates/stairs/index.html",
			controller: "TypeStairController",
			controllerAs: 'type'
		})
		
		.when('/rails', {
			templateUrl: "/templates/rails/index.html",
			controller: "TypeStairController",
			controllerAs: 'type'
		});
	});

	app.controller('ItemController', function() {
		this.choices = options;
	}); 

	app.controller('TypeStairController', function() {
		this.pics = s_pics;
	});

	app.controller('PanelController', function() {
		this.tab = 1;
		this.selectTab = function (setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
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