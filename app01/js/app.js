var app = angular.module('WebApp',[]);


app.controller('MainCtrl', function($scope,$rootScope){
	$scope.message = "World";

	$scope.cities = ['София','Варна','Видин','Пловдив','Пазарджик','Бургас'];
	$rootScope.query = 'В';
	console.log('message:', $scope.message);
});//main controller
