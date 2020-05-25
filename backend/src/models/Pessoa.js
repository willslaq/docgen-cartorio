const { Schema, model } = require('mongoose');

const pessoaSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    cpf: {
        type: Number,
        required: true,
    },
    rg: {
        type: Number,
    },
    email: {
        type: String,
    },
    fonePrincipal: {
        type: Number,
    },
    foneSecundário: {
        type: Number,
    },
    avatar: {
        type: String,
    },
}, {
    timestamps: true,
});

// pessoaSchema.virtual('avatar_url').get(function () {
//     return `http://localhost:3333/files/${this.avatar}`
// })

module.exports = model('Pessoa', pessoaSchema);