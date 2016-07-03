(function(){
	"use strict";

	angular
		.module('WebApp')
		.factory('api', ApiFactory )
		.factory('auth', AuthFactory);



		//-------------------------------------------------------
		//   Authentication Factory
		//-------------------------------------------------------
		AuthFactory.$inject = ['$firebaseAuth','$firebaseObject','settings'];

		function AuthFactory($firebaseAuth,$firebaseObject,settings){
			var ref = new Firebase(settings.FB_URL);
			var authRef = $firebaseAuth(ref);
			return {
				  'registerUser': registerUser
				, 'userLogin':    userLogin
			};
			//----------------------------------------
			// User login
			//----------------------------------------
			function userLogin(user){
				return authRef.$authWithPassword({
						  		'email':user.mail
								, 'password': user.pass
							})
							.then( function(authData){
								var userRef = ref.child('users').child(authData.uid);
								var userObj = $firebaseObject(userRef);
								return userObj.$loaded()
											  .then(function(data){
											  	return data;
											  })
											  .catch(function(error){
											  	console.log('get user data',error);
											  	return error;
											  });
							})
							.catch(function(error){
								console.log('user login:', error);
							});
			}//user login
			//----------------------------------------
			//  Register User
			//----------------------------------------
			function registerUser(user){
				return authRef.$createUser({
								  'email': user.mail
								, 'password': user.pass1
							})
							.then(function(authData){
								//write user data in DB
								var obj = ref.child('users').child(authData.uid);
								return obj.set({
									  'uid': authData.uid
									, 'email': user.mail
									, 'firstname': user.firstname
									, 'lastname': user.lastname
									, 'date': Firebase.ServerValue.TIMESTAMP
								}); //obj.set();
							})
							.catch(function(error){
								console.log('Create user:',error);
							});		
			}//function register user
			//----------------------------------------
		}// function AuthFactory
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
						   	   // console.log('Data:', data);
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