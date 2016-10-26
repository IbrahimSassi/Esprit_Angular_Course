/**
 * Created by Ibrahim on 21/10/2016.
 */


(function (angular) {
    'use strict';
    function EditUserController($scope,UserService,$location,$routeParams) {

        $scope.myUser = UserService.getOneById($routeParams.id);

        $scope.edit = function () {

            UserService.edit($scope.myUser);
            $location.path('/users');

        }

    }

    EditUserController.$inject = ['$scope','UserService','$location','$routeParams'];

    angular.module("app").controller('EditUserController', EditUserController);


})(angular);