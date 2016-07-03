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
			.when('/category/:catid/items',items)//list items 
			.when('/:catid/item-details/:id', itemDetails) //item details
			.when('/register', registration )
			.when('/login', login)
			.otherwise(defRoute);

	}//routes
	//-----------------------------------------
	
	var registration = {
				templateUrl: 'templates/registration.html',
				controller: 'UserCtrl'
			};
	var login = {
				templateUrl: 'templates/login.html',
				controller: 'UserCtrl'
			};			
	var home = {
				templateUrl: 'templates/home.html',
				controller: 'HomeCtrl'
			};
	var items = {
				templateUrl: 'templates/list-items.html',
				controller: 'ItemsCtrl'
			};
	var itemDetails = {
				templateUrl: 'templates/item-details.html',
				controller: 'ItemInfoCtrl'
			};		
	var defRoute = {
		redirectTo: '/'
	}; 
})();