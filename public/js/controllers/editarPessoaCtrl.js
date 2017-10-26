angular.module("cadPessoas").controller("editarPessoaCtrl", editarPessoaCtrl);


function editarPessoaCtrl ($scope, $rootScope, pessoasAPI, getPage, erroService){

    erroService.limpar();

    $scope.editPessoa = function(pessoa){
        pessoasAPI.editPessoa(pessoa)
            .then((res)=>{
                console.log(res);
                getPage.home();
            },
            (err)=>{
                console.log(err);
                erroService.setErro(err.data.mensagem);
            });
    };

}