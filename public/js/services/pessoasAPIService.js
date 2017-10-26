angular.module('cadPessoas').service('pessoasAPI', pessoasAPI);

function pessoasAPI ($http){

    this.getAllPessoas = function(){
        return $http.get('/api/pessoas');
    };

    this.postPessoa = function(pessoa){
        return $http.post('/api/pessoas', pessoa);
    };

    this.delete = function(pessoa){
        return $http.delete('/api/pessoas/'+pessoa.codigo)
    };

    this.getPessoa = function(pessoa){
        return $http.get('/api/pessoas/'+pessoa.codigo);
    };

    this.editPessoa = function(pessoa){
        return $http.put('/api/pessoas/'+pessoa.codigo, pessoa);
    };

}