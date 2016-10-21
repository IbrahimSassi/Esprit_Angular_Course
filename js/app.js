/**
 * Created by Ibrahim on 30/09/2016.
 */

var app = angular.module('app', ['ngRoute']);

app.config(ConfigFN);
app.run(RunFN);


ConfigFN.$inject = ['$routeProvider'];
RunFN.$inject = ['$rootScope'];

function ConfigFN($routeProvider) {
    $routeProvider
        .when(
            '/home', {
                controller: 'HomeController',
                templateUrl: 'views/home.view.html'
            }
        )
        .when(
            '/calculation', {
                controller: 'myController',
                templateUrl: 'views/calculation.view.html'
            }
        )
        .when(
            '/users', {
                controller: 'ngRepeatController',
                templateUrl: 'views/list.view.html'
            }
        )
        .when(
            '/users/create', {
                controller: 'CreateUserController',
                templateUrl: 'views/create.view.html'
            }
        )
        .when(
            '/users/edit/:id', {
                controller: 'EditUserController',
                templateUrl: 'views/edit.view.html'
            }
        )
        .when(
            '/users/:id', {
                controller: 'UserController',
                templateUrl: 'views/user.view.html'
            }
        )
        .otherwise({
            redirectTo: "/home"
        });
};

function RunFN($rootScope) {
    
}

