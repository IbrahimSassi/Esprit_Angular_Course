/**
 * Created by Ibrahim on 14/10/2016.
 */


(function (angular) {
    'use strict';
    function CreateUserController($scope,UserService,$location) {

        $scope.create = function () {
            UserService.add($scope.newUser);
            $location.path('/users');
        }
    }

    CreateUserController.$inject = ['$scope','UserService','$location'];

    angular.module("app").controller('CreateUserController', CreateUserController);


})(angular);