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
    localStorage.users = JSON.stringify([
        {id:1,name: "Ibrahim Sassi", country: "TN",salary:1500,image:"img/1.png"},
        {id:2,name: "hakim mliki", country: "FR",salary:2150,image:"img/2.png"},
        {id:3,name: "Firas ouerteni", country: "GER",salary:3600,image:"img/3.png"},
        {id:4,name: "Mourad matrix",country: "ENG",salary:100000,image:"img/4.png"},

    ]);
}

