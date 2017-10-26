var mongoose = require('mongoose');
var Pessoa = mongoose.model('Pessoa');

var enviarJSON = function (res, status, conteudo){
    res.status(status);
    res.json(conteudo);
}; 

var pessoasController = {
    getAll: function(req, res){
        console.log('Buscando todas as pessoas');
        Pessoa.find({}, (err, data)=>{
            if(err){ 
                console.log(err);
                enviarJSON(res, 500, {mensagem: 'Nada encontrado'}); //manda internal server error
            } else if(data.length==0){
                console.log('Consulta vazia');
                enviarJSON(res, 404, {mensagem: 'Nada encontrado'});
            } else {
                console.log('Dados encontrados');
                enviarJSON(res, 200, data);
            }
        });
    },

    create: function(req, res){
        console.log('Criando pessoa');
        if(!req.body){
            console.log('requisição inválida');
            enviarJSON(res, 400, {mensagem: "sem objeto pessoa"});
        } else {
            Pessoa.create(req.body, (err, data)=>{
                if(err){
                    console.log(err);
                    enviarJSON(res,403,{mensagem: "Erro ao cadastrar"});
                } else {
                    console.log(data);
                    enviarJSON(res,201,data);
                }
            });
        }
    },

    delete: function(req, res){
        console.log('removendo pessoas');
        if(req.params && req.params.codigo){
            Pessoa.findOneAndRemove({'codigo': req.params.codigo}, (err, data)=>{
                if(err){
                    console.log(err);
                } else if (!data){
                    console.log('impossível excluir codigo inexistente')
                } else {
                    console.log('deletado' + data);
                    enviarJSON(res, 200, data);
                }
            });
        } else {
            console.log('sem código');
            enviarJSON(res, 400, {mensagem: 'sem código'});
        }
    },

    get: function(req, res){
        console.log('buscando pessoa por código');
        if(req.params && req.params.codigo){
            Pessoa.findOne({codigo : req.params.codigo}, function(err, data){
                if(err){
                    console.log(err);
                    enviarJSON(res, 500, err);
                } else if(!data){
                    console.log('pessoa nao encontrada');
                    enviarJSON(res, 404, {mensagem: 'pessoa não encontrada'});
                } else {
                    console.log(data);
                    enviarJSON(res, 200, data);
                }
            });
        } else {
            console.log('sem código');
            enviarJSON(res, 400, {mensagem: 'sem código'});
        }
    },

    put: function(req, res){
        console.log('editando pessoa');
        if(req.params && req.params.codigo){
            if(req.params.codigo == req.body.codigo){ //nao entendi o porquê
                Pessoa.findOne({codigo: req.params.codigo}, function(err, data){
                    if(err){
                        console.log(err);
                        enviarJSON(res, 500, err);
                    } else if(!data){
                        console.log('pessoa nao encontrada');
                        enviarJSON(res, 404, {mensagem: 'Pessoa não encontrada'});
                    } else {
                        data.nome = req.body.nome;
                        data.idade = req.body.idade;
                        data.save(function (err, data){
                            if(err){
                                console.log(err);
                                enviarJSON(res, 500, err);
                            }else{
                                console.log('atualizado com sucesso')
                                enviarJSON(res, 200, data);
                            }
                        });
                    }
                });
            } else {
                console.log('código incorreto');
                enviarJSON(res, 400,{mensagem:'código incorreto'});
            }
        } else {
            console.log('sem código');
            enviarJSON(res, 400, {mensagem: 'sem código'});
        }
    }
}

module.exports = pessoasController;