/**
 * Created by Ibrahim on 07/10/2016.
 */

(function (angular) {
    'use strict';
    function UserController($scope,$routeParams,UserService) {

        $scope.idUser = $routeParams.id;
        $scope.myUser = UserService.getOneById($scope.idUser);



    }

    UserController.$inject = ['$scope','$routeParams','UserService'];

    angular.module("app").controller('UserController', UserController);


})(angular);