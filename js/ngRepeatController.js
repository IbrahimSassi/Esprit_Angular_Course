/**
 * Created by Ibrahim on 07/10/2016.
 */


(function (angular) {
    'use strict';
    function ngRepeatController($scope,UserService) {
        $scope.people = UserService.getAll();
    }
    ngRepeatController.$inject  = ['$scope','UserService'];

    angular.module("app").controller('ngRepeatController',ngRepeatController);



    //My Filter
    angular.module("app")
        .filter('capitalize',function () {
            return function (item,params) {
                return item.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
            };
        });








})(angular);