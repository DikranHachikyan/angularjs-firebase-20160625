(function(){
	"use strict";

	angular
		.module('WebApp')
		.controller('HomeCtrl', HomeController)
		.controller('ItemsCtrl', ItemsController)
		.controller('ItemInfoCtrl', ItemInfoController)
		.controller('UserCtrl', UserController);

		//--------------------------------------------------
		//      Home Controller
		//--------------------------------------------------
		HomeController.$inject  = ['$scope','api','$cookies'];

		function HomeController($scope, api,$cookies){
			//console.log('before get cats');
			api.getCategories()
			   .then(function(data){
			   		//console.log('data received');
			   		$scope.categories = data;
			   });
		    //console.log('after get cats');
		    $scope.saveCategory = function(value){
		    		$cookies.put('category',value);
		    };
		}
		//---------------------------------------------------
		//   Items Controller
		//---------------------------------------------------
		ItemsController.$inject = ['$scope','api','$routeParams','$cookies'];

		function ItemsController($scope, api,$routeParams,$cookies){
			//console.log('Items Ctrl');
			var category =  $routeParams.catid;
			if( category){
				api.getItemsByCategory( category )
			   .then( function(data){
			   		//console.log('data:',data);
			   		$scope.items = data;
			   		$scope.catid = category;
			   		$scope.category_title = $cookies.get('category');
			   });			
			}
			
		}
		//---------------------------------------------------
		// Item Info Controller
		//---------------------------------------------------
		ItemInfoController.$inject = ['$scope','api', '$routeParams'];
		function ItemInfoController($scope, api, $routeParams){
			var catid = $routeParams.catid;
			var id    = $routeParams.id;
			if( id && catid)
			{
				api.getItemDetails(catid, id)
				   .then(function(data){
				   		$scope.item = data;
				   });
			}
		}
		//---------------------------------------------------
		// User Controller
		//---------------------------------------------------
		UserController.$inject = ['$scope','auth','$location','$rootScope'];

		function UserController($scope,auth,$location,$rootScope){
			console.log('user controller');

			$scope.login = function(user){
				auth.userLogin(user)
					.then(function(data){
						$rootScope.currentUser = data;
						console.log('login:',data);
						$location.path('/');
					});
			};// login
			//--------------------------------
			$scope.register = function(user){
				//console.log('user:', user);
				auth.registerUser( user )
					.then(function(error){
						if(error)
						{
							console.log(error);
						}
						else
						{
							$scope.login({
								 'mail':user.mail
								,'pass': user.pass1
							});
						}
					});
			};// regster
			
		}//function user controller
		//---------------------------------------------------
})();
