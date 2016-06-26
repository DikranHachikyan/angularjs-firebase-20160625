(function(){
	"use strict";

	angular
		.module('WebApp')
		.factory('api', ApiFactory );

		//-------------------------------------------------------
		//    Api Factory
		//-------------------------------------------------------
		ApiFactory.$inject = ['$http','$q','settings'];

		function ApiFactory($http,$q,settings){

			return {
				'getCategories': getCategories,
				'getItemsByCategory': getItemsByCategory,
				'getItemDetails': getItemDetails,
				'testPromise'  : testPromise
			};//return from api factory
			//-------------------------------------
			// Get Categories
			//-------------------------------------
			function getCategories(){
				return $http.get( settings.DATA_URL)
							.then(function(response){
								return response.data.categories;
							}//success
							, function(error){
								console.log('get categories:',error);
							});
			}//get categories
			//-------------------------------------
			// get items by category
			//-------------------------------------
			function getItemsByCategory(category){
				return $http.get(settings.DATA_URL)
							.then(function(response){
								var category_title = response.data.categories[category].title;
								return {
										'category_title': category_title,
										'items' : response.data.collections[category]
									};
							}//success
							, function(error){
								console.log('get items by category:',error);
							});
			}
			//--------------------------------------
			// get item details
			//--------------------------------------
			function getItemDetails(category, id){
				return $http.get(settings.DATA_URL)
							.then(function(response){
								return response.data.collections[category][id];
							}//success
							, function(error){
								console.log('get items by category:',error);
							});
			}
			//--------------------------------------
			//  test promise
			//--------------------------------------
			function testPromise(x){
				  var deferred = $q.defer();

				  setTimeout(function() {

				    if (  x % 2 == 0 ) {
				      deferred.resolve('Ok');
				    } else {
				      deferred.reject('Error!');
				    }
				  }, 1000);

				  return deferred.promise;
			}


		}//function apiFactory
		

})();