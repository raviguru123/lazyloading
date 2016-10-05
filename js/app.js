var app=angular.module('app.module', ['ui.router','home.module']);
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/");
	
	$stateProvider.state("/",{
		url:"/",
		templateUrl:"./html/home.html"
	}).state("home",{
		url:"/home",
		templateUrl:"./html/home.html",
		controller:"homeController"
	})
});




