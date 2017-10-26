angular.module('cadPessoas').service('erroService', erroService);

function erroService($rootScope){

    this.setErro = function(err){
        $rootScope.erro = err;
    }

    this.limpar = function(){
        $rootScope.erro = "";
    }

}