/**
 * Created by Ibrahim on 07/10/2016.
 */
( function (angular) {
    'use strict';
    function myService() {
        this.sum = function(var1,var2) {
            return var1+var2;
        }}

    angular
        .module("app")
        .service("myService",myService);

})(angular);
