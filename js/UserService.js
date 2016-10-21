/**
 * Created by Ibrahim on 14/10/2016.
 */

( function (angular) {
    'use strict';
    function UserService($filter) {
        this.users = [
            {id:1,name: "Ibrahim Sassi", country: "TN",salary:1500,image:"img/1.png"},
            {id:2,name: "hakim mliki", country: "FR",salary:2150,image:"img/2.png"},
            {id:3,name: "Firas ouerteni", country: "GER",salary:3600,image:"img/3.png"},
            {id:4,name: "Mourad matrix",country: "ENG",salary:100000,image:"img/4.png"},

        ];
        
        this.add= function (user) {
            this.users.push(user);

        };
        
        
        this.edit = function (user) {
            for (var i=0;i<UserService.users;i++)
            {
                if(UserService.users[i].id==user.id){
                    UserService.users[i]= $scope.myUser;
                }
            }

        }


        this.getOneById= function (id) {
            return $filter('filter')(this.users,{id:id})[0];
            // My WAY
            // UserService.users.forEach(function (user) {
            //     if(user.id == $scope.idUser){
            //         $scope.myUser = user;
            //     }
            // })


        }

        this.getAll= function () {
            return this.users;
        }
    }

    UserService.$inject=['$filter'];

    angular
        .module("app")
        .service("UserService",UserService);

})(angular);
