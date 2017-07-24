function testService($http) {

	this.get = function () {
		console.log("REQUEST DATA ::GET REQUEST");
		return $http.post('http://localhost:3000/',{"headers":{"Content-type":"application/json"}});
	}

	this.post = function (myTextarea) {
		// xml = {"result":"<xml>"};
		xml = {"result":myTextarea};
		console.log("REQUEST DATA ::"+xml);
		return $http.post('http://localhost:3000/',xml,{"headers":{"Content-type":"application/json"}});
	}
}

function TestCtrl($scope,testService) {
	var self = this;

	self.parsexml = function () {
		console.log("SOPAN");
		testService.post($scope.myTextarea)
			.success(function (res) {
				console.log("POST SUCCESS");
			});
	}
}

angular.module('app', [])
.service('testService', testService)
.controller('TestCtrl', TestCtrl)