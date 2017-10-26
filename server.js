var express = require('express');
var app = express();
var bodyParser = require('body-parser');
require('./db');

var routerapi = require('./routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', routerapi);

app.use(express.static(__dirname+'/public'));

var port = 80;
app.listen(port, function(){
    console.log('Server na porta: '+port)
})