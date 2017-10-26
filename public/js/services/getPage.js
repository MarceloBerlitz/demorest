angular.module('cadPessoas').service('getPage', getPage);

function getPage ($window){

    this.home = function(){
        $window.location.href = "/#!/home";
    };

    this.editar = function(){
        $window.location.href = "/#!/editar";
    };

}