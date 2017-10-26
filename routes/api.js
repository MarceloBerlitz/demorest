var express = require('express');
var pessoasCtrl = require('../controllers/pessoas');

var router = express.Router();
router
    .get('/pessoas', pessoasCtrl.getAll)
    .post('/pessoas', pessoasCtrl.create);
router
    .get('/pessoas/:codigo', pessoasCtrl.get)
    .delete('/pessoas/:codigo', pessoasCtrl.delete)
    .put('/pessoas/:codigo', pessoasCtrl.put);

module.exports = router;