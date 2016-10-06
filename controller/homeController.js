var app=angular.module("home.module",[]);
app.controller("homeController",["$scope","$ocLazyLoad"
	,function($scope,$ocLazyLoad){
		$ocLazyLoad.load({
			serie:true,
			cache:true,
			files:["js/plugins/morris/raphael.min.js",
			"js/plugins/morris/morris.min.js",
			"js/plugins/morris/morris-data.js"]
		})
		

		
	}]);