(function(){
	"use strict";

	angular
		.module('WebApp')
		.controller('HomeCtrl', HomeController)
		.controller('ItemsCtrl', ItemsController)
		.controller('ItemInfoCtrl', ItemInfoController);

		//--------------------------------------------------
		//      Home Controller
		//--------------------------------------------------
		HomeController.$inject  = ['$scope','api'];

		function HomeController($scope, api){
			//console.log('before get cats');
			api.getCategories()
			   .then(function(data){
			   		//console.log('data received');
			   		$scope.categories = data;
			   });
		    //console.log('after get cats');
		    /*api.testPromise(6)
		       .then( function(result){
		       		console.log('success:',result);
		       }
		       ,function(error){
		       		console.log('error:',error);
		       });*/
		}
		//---------------------------------------------------
		//   Items Controller
		//---------------------------------------------------
		ItemsController.$inject = ['$scope','api','$routeParams'];

		function ItemsController($scope,api,$routeParams){
			//console.log('Items Ctrl');
			var category =  $routeParams.catid;
			if( category){
				api.getItemsByCategory( category )
			   .then( function(data){
			   		$scope.items = data.items;
			   		$scope.catid = category;
			   		$scope.category_title = data.category_title;
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
})();
