/**
 * Created by Ibrahim on 07/10/2016.
 */

(function (angular) {
    'use strict';
    function ControllerFN($scope, myServiceCalculation) {
        $scope.num1 = "";
        $scope.num2 = "";
        $scope.calcul = function () {
            $scope.result = myServiceCalculation.sum( $scope.num1 , $scope.num2);
            Materialize.toast($scope.result, 5000);
        }
    }
    ControllerFN.$inject  = ['$scope','myService'];

    angular.module("app").controller('myController',ControllerFN);


})(angular);