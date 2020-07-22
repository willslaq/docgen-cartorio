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
    foneSecundario: {
        type: Number,
    },
    avatar: {
        type: String,
    },
    documentos: [{
        type: String,
    }],
}, {
    timestamps: true,
});

// pessoaSchema.virtual('avatar_url').get(function () {
//     return `http://localhost:3333/files/${this.avatar}`
// })

pessoaSchema.virtual('documentos_url').get(function () {
    if (this.documentos == undefined) {
        return;
    }
    let documentosUrl = [`http://localhost:3333/files/${this.documentos}`];
    this.documentos.map(documento => {
        imgsUrl.push(`http://localhost:3333/files/${documento}`);
    });
    return imgsUrl;
})

module.exports = model('Pessoa', pessoaSchema);