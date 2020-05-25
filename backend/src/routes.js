const express = require('express');

const PessoaController = require('./controllers/PessoaController')

const routes = express.Router();


routes.post('/home', PessoaController.list);

module.exports = routes;