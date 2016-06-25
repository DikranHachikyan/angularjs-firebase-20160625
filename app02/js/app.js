var app = angular.module('WebApp',['ngRoute']);

app.config(['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/',{
			template: '<h1>{{message}}</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex veritatis, rerum quisquam quasi necessitatibus at fugiat voluptates, cum, laborum, provident cumque et rem minima cupiditate. Eligendi eius rem quos ad!</p>',
			controller: 'HomeCtrl'
		})// app root
		.when('/about',{
			template:'<h1>{{message}}</h1>',
			controller: 'AboutCtrl'
		})//about 
		.otherwise({
			redirectTo: '/'
		});

}]);//routes


