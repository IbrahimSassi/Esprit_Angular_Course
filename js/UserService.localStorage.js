/**
 * Created by Ibrahim on 21/10/2016.
 */

( function (angular) {
    'use strict';
    function UserService($filter) {


        localStorage.users = JSON.stringify([
            {id:1,name: "Ibrahim Sassi", country: "TN",salary:1500,image:"img/1.png"},
            {id:2,name: "hakim mliki", country: "FR",salary:2150,image:"img/2.png"},
            {id:3,name: "Firas ouerteni", country: "GER",salary:3600,image:"img/3.png"},
            {id:4,name: "Mourad matrix",country: "ENG",salary:100000,image:"img/4.png"},

        ]);



        this.add= function (user) {
            var users= this.getAll();

            var max=0;
            if (users != null){
                users.forEach(function (user1) {
                    if (user1.id>max){
                        max = user1.id;
                    }
                });
            }
            user.image="img/default.png";
           // user.id = max+1;

            users.push(user);
            //this.users.push(user);
            localStorage.users=JSON.stringify(users);

        };


        this.edit = function (user) {
            var users= this.getAll();
            users[getUserIndex(user.id)] = user;

            localStorage.users=JSON.stringify(users);
        }

        this.delete = function (index) {
            var users= this.getAll();
             users.splice(index,1);
             localStorage.users=JSON.stringify(users);
        }




        this.getOneById= function (id) {
            var users = this.getAll();
            return $filter('filter')(users,{id:id})[0];


        }

        function getUserIndex(id){
            var users=JSON.parse(localStorage.users);
            for(var i=0;i<users.length;i++){
                if(users[i].id==id)
                    return i;
            }
            return null;
        }

        this.getAll= function () {
            return JSON.parse(localStorage.users);
        }

    }

    UserService.$inject=['$filter'];

    angular
        .module("app")
        .service("UserService",UserService);

})(angular);
