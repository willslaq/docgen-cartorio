const Pessoa = require('../models/Pessoa');

module.exports = {
    async list(req, res) {
        const { nome, cpf, rg, email, fonePrincipal, foneSecundario } = req.body;

        const pessoas = await Pessoa.select("nome + cpf + rg + email + fonePrincipal + foneSecundario");

        return res.json(pessoas);
    }
};