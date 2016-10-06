var app=angular.module("app.module1",[]);
app.controller("child1Controller",["$scope",function($scope){
	console.log("hello this is first child Controller");
}]);