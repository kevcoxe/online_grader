
var app = angular.module("myApp", ['ui.bootstrap', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'home.html',
            controller  : 'MyCtrl'
        })
        .otherwise({
        	redirectTo: '/'
        });
});

app.controller("MyCtrl", function($scope) {
	$scope.name = "Kevin Coxe";
});