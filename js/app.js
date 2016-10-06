var app=angular.module('app.module', ['ui.router','oc.lazyLoad']);
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/");
	
	$stateProvider.state("/",{
		url:"/",
		templateUrl:"./html/home.html"
	}).state("home",{
		url:"/home",
		templateUrl:"./html/home.html",
		controller:"homeController",
		resolve:{
			loadMyCtrl:["$ocLazyLoad",function($ocLazyLoad){
				return $ocLazyLoad.load({
					cache:true,
					files:["controller/homeController.js"]
				})
			}]
		}
	}).state("home.child1",{
		url:"/home.child1",
		templateUrl:"./html/child1.html",
		parent:"home",
		controller:"child1Controller",
		resolve:{
			loadMyCtrl:["$ocLazyLoad",function($ocLazyLoad){
				return $ocLazyLoad.load({
					cache:true,
					files:["controller/child1Controller.js"]
				});
			}]
		}
	}).state("home.child2",{
		url:"/home.child2",
		templateUrl:"./html/child2.html",
		parent:"home",
		controller:"child2Controller",
		resolve:{
			loadMyCtrl:["$ocLazyLoad",function($ocLazyLoad){
				return $ocLazyLoad.load({
					cache:true,
					files:["controller/child2Controller.js"]
				});
			}]
		}
	}).state("home.child1.child1",{
		url:"/home.child1.child1",
		templateUrl:"./html/nest.html",
		parent:"home.child1",
	})
});





