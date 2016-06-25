(function(){
	"use strict";
	angular
		.module('WebApp')
		.config(AppRoutes);

	//-----------------------------------------	
	AppRoutes.$inject = ['$routeProvider'];

	function AppRoutes( $routeProvider ){
		$routeProvider
			.when('/',home)// app root
			.when('/about',about)//about 
			.otherwise(defRoute);

	}//routes
	//-----------------------------------------
		
	var home = {
				templateUrl: 'templates/home.html',
				controller: 'HomeCtrl'
			};
	var about = {
				templateUrl: 'templates/about.html',
				controller: 'AboutCtrl'
			};
	var defRoute = {
		redirectTo: '/'
	}; 
})();