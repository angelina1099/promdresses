angular.module('promDresses',['promDresses.controllers','ui.router'])
.config(function($stateProvider,$urlRouterProvider){

	$stateProvider
	.state('welcome', {
		url:"/welcome",
		templateUrl:"templates/welcome.html",
		controller: "welcomeCtrl"
 
	})
	.state('menu',{
		url:"/menu",
		abstract:true,
		templateUrl:"templates/menu.html",
	})

	.state('menu.c_necklaces', {
		url:"/c_necklaces",
		templateUrl:"templates/c_necklaces.html",
		controller: "c_necklacesCtrl"
	})
	
	.state('menu.s_necklaces', {
		url:"/s_necklaces",
		templateUrl:"templates/s_necklaces.html",
		controller: "s_necklacesCtrl"
	})

	.state('menu.bracelets', {
		url:"/bracelets",
		templateUrl:"templates/bracelets.html",
		controller: "braceletsCtrl"
	})
	
	.state('menu.earrings', {
		url:"/earrings",
		templateUrl:"templates/earrings.html",
		controller: "earringsCtrl"
	})
	.state('menu.cocktail_d', {
		url:"/cocktail_d",
		templateUrl:"templates/cocktail_d.html",
		controller: "cocktail_dCtrl"
	});
	
$urlRouterProvider.otherwise('/welcome');
});