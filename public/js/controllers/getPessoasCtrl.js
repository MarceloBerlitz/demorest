angular.module("cadPessoas").controller("getPessoasCtrl", getPessoasCtrl);

function getPessoasCtrl ($rootScope, $scope, pessoasAPI, getPage, erroService){

    erroService.limpar();

    $rootScope.carregaPessoas = function(){
        console.log('carregando pessoas');
        $scope.Pessoas = [];
        pessoasAPI.getAllPessoas()
            .then((res)=>{
                $scope.Pessoas = res.data,
                console.log($scope.Pessoas);
            },
            (err)=>{
                console.log(err);
            });
    };

    $scope.verPessoa = function(pessoa){
        pessoasAPI.getPessoa(pessoa)
            .then((res)=>{
                $rootScope.pessoa = res.data;
            },        
            (err)=>{
                console.log(err);
            });
        getPage.editar();
    };

    $scope.deletePessoa = function(pessoa){
        if(confirm("Deseja mesmo apagar "+pessoa.nome+"?")){
            pessoasAPI.delete(pessoa)
                .then(()=>{
                    console.log('apaguei');
                    $rootScope.carregaPessoas();
                    $rootScope.pessoa = {};
                },(err)=>{
                    console.log(err);
                });
        };
    };

    $rootScope.pessoa = {};
    $rootScope.carregaPessoas();

    $scope.criterioOrdem = 'codigo';
    $scope.ordenarPor = function (campo){
        if($scope.criterioOrdem != campo){
            $scope.criterioOrdem = campo;
        } else {
            $scope.direcao = !$scope.direcao;
        }
    };

}