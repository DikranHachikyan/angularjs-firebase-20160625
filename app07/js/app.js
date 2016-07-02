(function(){
	"use strict";
	
	 angular
	 	.module('WebApp',['ngRoute',
	 					  'ngSanitize',
	 					  'firebase',
	 					  'ngCookies'])
	 	.constant('settings', {
	 		'DATA_URL': './cd-db-firebase.json',
	 		'FB_URL':'https://music-shop.firebaseio.com/'
	 	});

})();



