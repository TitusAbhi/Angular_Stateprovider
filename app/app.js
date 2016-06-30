
var app = angular
 .module('myApp', ["ui.router"])
 .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
			controller: 'homeController'
        })
		 .state('home.list', {
            url: '/home.list',
            templateUrl: 'views/home-list.html',
			controller: 'homeController'
        })
		 .state('home.paragraph', {
            url: '/home.paragraph',
            templateUrl: 'views/home-para.html',
			controller: 'homeController'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
});



