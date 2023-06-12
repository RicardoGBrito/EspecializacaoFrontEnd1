const { Schema, model } = require("mongoose")


const produtoSchema = new Schema({
    nome: String,
    preco: Number,
    fornecedor: String,
    url_imagem: String,
    descricao: String
})

module.exports = model("Produto", produtoSchema)