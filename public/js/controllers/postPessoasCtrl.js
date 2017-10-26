angular.module("cadPessoas").controller("postPessoasCtrl", postPessoasCtrl);

function postPessoasCtrl ($rootScope, $scope, pessoasAPI, getPage, erroService){

    erroService.limpar();

    $rootScope.pessoa = {};
    $scope.addPessoa = function(pessoa){
        $rootScope.pessoa = pessoa;
        pessoasAPI.postPessoa(pessoa)
            .then((res)=>{
                console.log(res.data),
                getPage.home();
                
            }, 
            (err)=>{
                console.log(err.data.mensagem);
                erroService.setErro(err.data.mensagem);
            });
    };

}