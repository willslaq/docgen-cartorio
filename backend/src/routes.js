const express = require('express');

const PessoaController = require('./controllers/PessoaController')

const routes = express.Router();


routes.post('/home', PessoaController.list);
routes.post('/pessoa/add', PessoaController.create);
routes.post('/pessoa/update', PessoaController.update);

module.exports = routes;