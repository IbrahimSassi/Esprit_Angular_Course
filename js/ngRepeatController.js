/**
 * Created by Ibrahim on 07/10/2016.
 */


(function (angular) {
    'use strict';
    function ngRepeatController($scope,UserService) {
        $scope.people = UserService.getAll();

        $scope.delete = function (id) {
            console.log(id);
            UserService.delete(id);
            $scope.people = UserService.getAll();

        }
    }

    ngRepeatController.$inject  = ['$scope','UserService'];

    angular.module("app")
        .controller('ngRepeatController',ngRepeatController);






})(angular);