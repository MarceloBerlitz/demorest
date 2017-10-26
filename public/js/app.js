angular.module('cadPessoas', ['ngRoute','ngMessages'])

.config(function($routeProvider){

    $routeProvider
        .when('/home', {
            templateUrl:'views/getPessoas.html',
            //controller: 'getPessoasCtrl'
        })
        .when('/inserir', {
            templateUrl:'views/postPessoas.html',
            controller: 'postPessoasCtrl'
        })
        .when('/editar', {
            templateUrl:'views/editarPessoa.html',
            controller: 'editarPessoaCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });

});