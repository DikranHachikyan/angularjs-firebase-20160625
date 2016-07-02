(function(){
	"use strict";

	angular
		.module('WebApp')
		.factory('api', ApiFactory );

		//-------------------------------------------------------
		//    Api Factory
		//-------------------------------------------------------
		ApiFactory.$inject = ['$http','settings','$firebaseObject','$rootScope'];

		function ApiFactory($http,settings,$firebaseObject,$rootScope ){
			var ref = new Firebase(settings.FB_URL);

			return {
				'getCategories': getCategories,
				'getItemsByCategory': getItemsByCategory,
				'getItemDetails': getItemDetails
			};//return from api factory
			//-------------------------------------
			// Get Categories
			//-------------------------------------
			function getCategories(){
				var catsRef = ref.child('categories');
				var catsObj = $firebaseObject(catsRef);

				return catsObj.$loaded()
						   .then(function(data){
						   	    console.log('Data:', data);
						   		return data;
						   })
						   .catch(function(error){
						   	 console.log('Error:', error);
						   	 	 return error;
						   });
			}//get categories
			//-------------------------------------
			// get items by category
			//-------------------------------------
			function getItemsByCategory(category){
				var itemsRef = ref.child('collections').child(category);
				var itemsObj = $firebaseObject(itemsRef);
				return itemsObj.$loaded()
							   .then(function(data){
							   		return data;
							   })
							   .catch(function(error){
							   		console.log('Error:', error);
							   		return error;
							   });
			}
			//--------------------------------------
			// get item details
			//--------------------------------------
			function getItemDetails(category, id){
				var itemInfoRef = ref.child('collections').child(category).child(id);
				var itemInfoObj = $firebaseObject(itemInfoRef);

				return itemInfoObj.$loaded()
								  .then( function(data){
								  	return data;
								  })
								  .catch(function(error){
								  	return error;
								  });
			}
			


		}//function apiFactory
		

})();