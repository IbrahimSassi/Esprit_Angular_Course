/**
 * Created by Ibrahim on 07/10/2016.
 */

(function (angular) {
    'use strict';
    function UserController($scope,$routeParams,UserService,$filter) {

        $scope.idUser = $routeParams.id;
        $scope.myUser = UserService.getOneById($scope.idUser);



    }

    UserController.$inject = ['$scope','$routeParams','UserService','$filter'];

    angular.module("app").controller('UserController', UserController);


})(angular);