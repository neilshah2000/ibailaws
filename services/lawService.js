var myApp = angular.module('lineModule',[]);

myApp.factory('lawService', [function(){
	var getLaws = function(){
		return promiseCSV('F_O_C_Master_compilation.csv')
	}

	function promiseCSV(url){
		return new Promise(function(onsuccess, onerror){
			d3.csv(url, onsuccess)
		})
	}

	return {
		getLaws: getLaws
	}
}])