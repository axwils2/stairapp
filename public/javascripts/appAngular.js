(function() {
	var app = angular.module('stair', []);



	app.controller('ItemController', function() {
		this.choices = options;
	}); 


	var options = [
		{
			image: "/images/stairs.jpeg", 
			title: "Measuring Stairs?"
		},
		{
			image: "/images/rails.png",
			title: "Measuring Rails?"
		}
	];
})();