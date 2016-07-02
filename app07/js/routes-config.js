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
			.otherwise(defRoute);

	}//routes
	//-----------------------------------------
		
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