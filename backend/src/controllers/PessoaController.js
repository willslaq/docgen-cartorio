const Pessoa = require('../models/Pessoa');
const path = require('path');

module.exports = {
    async list(req, res) {
        const { nome, cpf, rg, email, fonePrincipal, foneSecundario } = req.body;

        const pessoas = await Pessoa.find().select("nome + cpf + rg + email + fonePrincipal + foneSecundario");

        return res.json(pessoas);
    },

    async create(req, res) {
        const { nome, cpf, rg, email, fonePrincipal, foneSecundario, avatar } = req.body;

        let documentosTemp = req.files.documentos;
        let documentos = [];
        documentosTemp.map(documento => {
            documentos.push(documento.filename);
        })

        const store = await Pessoa.create({
            nome,
            cpf,
            rg,
            email,
            fonePrincipal,
            foneSecundario,
            documentos,
            avatar: req.files.avatar[0].filename,
        });

        return res.json(store);

    },

    async pessoaId(req, res) {
        const { _id } = req.body;
        const pessoa = await Pessoa.findById(_id);
        return res.json(pessoa);
    },

    async update(req, res) {
        const { nome, cpf, rg, email, fonePrincipal, foneSecundario, id } = req.body;

        console.log(req.body)

        const pessoa = req.pessoaId;

        await Pessoa.updateOne({
            $and: [{ _id: id }, { pessoa }]
        }, {
            nome,
            cpf,
            rg,
            email,
            fonePrincipal,
            foneSecundario
        }, (err, numberAffected, rawResponse) => {
            if (err) {
                console.log(err);
                return res.json({ "ok": "erro" });
            } else {
                console.log(numberAffected);
                return res.json({ "ok": "ok" })
            }
        });
    }
};



