const express = require('express');


const routes = express.Router();

routes.post('/pessoa/lista', console.log('hello world!'));

module.exports = routes;