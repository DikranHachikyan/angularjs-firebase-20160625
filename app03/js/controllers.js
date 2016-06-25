app
.controller('HomeCtrl',['$scope',function($scope){
	console.log('Home Ctrl');
	$scope.message = 'Home Page';
}]) //Home Controller
.controller('AboutCtrl',['$scope',function($scope){
	console.log('About Ctrl');
	$scope.message = 'About Page';
}])