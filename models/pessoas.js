var mongoose = require('mongoose');

var pessoaSchema =  new mongoose.Schema({
    codigo: {
        type: Number,
        min: [1, 'Código deve ser maior que 0'],
        required: true,
        unique: true
    },
    nome: {
        type: String,
        minlength: [4, 'Nome deve ter no mínimo 10 caracteres'],
        maxlength: [120, 'Nome não pode exceder 120 caracteres'],
        required: true
    },
    idade: {
        type: Number,
        min: [0, 'Idade não pode ser negativa']
    }
});

mongoose.model('Pessoa', pessoaSchema, 'Pessoas');