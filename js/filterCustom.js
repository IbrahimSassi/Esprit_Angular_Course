/**
 * Created by Ibrahim on 26/10/2016.
 */
//My Filter

(function (angular) {

angular.module("app")
    .filter('capitalize',function () {
        return function (item,params) {
            return item.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        };
    });
})(angular);