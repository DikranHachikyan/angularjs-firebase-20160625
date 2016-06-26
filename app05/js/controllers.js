(function(){
	"use strict";

	angular
		.module('WebApp')
		.controller('HomeCtrl', HomeController)
		.controller('AboutCtrl', AboutController);

		//--------------------------------------------------
		//      Home Controller
		//--------------------------------------------------
		HomeController.$inject  = ['$scope','api'];

		function HomeController($scope, api){
			console.log('Home Ctrl');
			$scope.message = 'Home Page';		
		}
		//---------------------------------------------------
		//   About Controller
		//---------------------------------------------------
		AboutController.$inject = ['$scope'];

		function AboutController($scope){
			console.log('About Ctrl');
			$scope.message = 'About Page';		
		}
		//---------------------------------------------------
})();
