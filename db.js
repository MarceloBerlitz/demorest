var mongoose = require('mongoose');

var url = 'mongodb://localhost/DBPessoas';

mongoose.Promise = global.Promise;
mongoose.connect(url, {useMongoClient: true});

mongoose.connection.on('connected', ()=>{
    console.log('Conectado ao DB');
});//quando connection for connected execute o callback
mongoose.connection.on('error', (err)=>{
    console.log('Erro: '+err);
});
mongoose.connection.on('disconnected', ()=>{
    console.log('Desconectado do DB');
});

require('./models/pessoas');