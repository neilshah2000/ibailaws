myApp.controller('lineController', ['$scope', 'lawService', function($scope, lawService) {
  	$scope.greeting = 'Hola!';
  	$scope.laws = ['test value', 'another val', 'val three']
  	lawService.getLaws().then(function(data){
  		$scope.laws = data;
  		console.log($scope.laws)
  		$scope.lawProperties = Object.keys($scope.laws[0])
  		$scope.$apply();
  	})
}]);