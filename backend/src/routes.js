const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const PessoaController = require('./controllers/PessoaController')

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/pessoas', PessoaController.list);
routes.post('/pessoa', PessoaController.pessoaId);
routes.post('/pessoa-add',
    upload.fields([{ name: 'avatar', maxCount: 1 },
    { name: 'documentos'}]), PessoaController.create);
routes.post('/pessoa-update', PessoaController.update);

module.exports = routes;