var app = angular.module('WebApp',['ngRoute']);

app.config(['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/',{
			templateUrl: 'templates/home.html',
			controller: 'HomeCtrl'
		})// app root
		.when('/about',{
			templateUrl: 'templates/about.html',
			controller: 'AboutCtrl'
		})//about 
		.otherwise({
			redirectTo: '/'
		});

}]);//routes


