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
	}).state("home.child1",{
		url:"/home.child1",
		templateUrl:"./html/child1.html",
		parent:"home",
	}).state("home.child2",{
		url:"/home.child2",
		templateUrl:"./html/child2.html",
		parent:"home",
	}).state("home.child1.child1",{
		url:"/home.child1.child1",
		templateUrl:"./html/nest.html",
		parent:"home.child1",
	})
});




