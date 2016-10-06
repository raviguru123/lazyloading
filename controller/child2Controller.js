var app=angular.module("app.module");
app.controller("child2Controller",["$scope",function($scope){
	console.log("child2 controller get executed before loading");
}]);