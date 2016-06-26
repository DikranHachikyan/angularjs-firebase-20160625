(function(){
	"use strict";
	
	 angular
	 	.module('WebApp',['ngRoute','ngSanitize'])
	 	.constant('settings', {
	 		'DATA_URL': './cd-db-firebase.json'
	 	});

})();



