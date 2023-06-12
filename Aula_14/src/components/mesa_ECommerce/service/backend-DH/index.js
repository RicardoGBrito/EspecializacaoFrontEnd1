
/* 
  A dependência nodemon serve para atualizar automaticamente o backend, sem precisar reinicializar o serviço.
  Deve ser instalada somente no ambiente de desenvolvimento ( -D ).' npm install nodemon -D '. Depois disso,
  altera o script no packge.json para de node para nodemon.

*/

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://ricardo:cocada4321@cluster0.crnldw7.mongodb.net/meu_banco?retryWrites=true&w=majority")


const express = require('express');
const cors = require('CORS');

const ProdutoSchema = require("./schemas/produtoSchema")

const app = express();

const PORT = process.env.PORT || 3333

const produtos = [
    {
        id:1,
        nome:"Echo Dot (5° Geração)",
        preco:400.90,
        fornecedor:"Amazon",
        url_imagem:"https://c.shld.net/rpx/i/s/i/spin/10000003/prod_2305917712??hei=64&wid=64&qlt=50",
        descricao:"Nosso smart speaker mais popular conta com um design compacto e um display de LED ainda melhor que exibe a hora, o clima, títulos de músicas e mais. Curta o áudio ainda melhor e escute um som vibrante em qualquer ambiente da sua casa, não perca a hora com Alexa e controle dispositivos de casa inteligente compatíveis por detecção de movimento."
    },
    {
        id:2,
        nome:"Echo Dot (5° Geração)",
        preco:700.90,
        fornecedor:"Amazon",
        url_imagem:"https://c.shld.net/rpx/i/s/i/spin/10000003/prod_2305917712??hei=64&wid=64&qlt=50",
        descricao:"Nosso smart speaker mais popular conta com um design compacto e um display de LED ainda melhor que exibe a hora, o clima, títulos de músicas e mais. Curta o áudio ainda melhor e escute um som vibrante em qualquer ambiente da sua casa, não perca a hora com Alexa e controle dispositivos de casa inteligente compatíveis por detecção de movimento."
    },
    {
        id:3,
        nome:"Echo Dot (5° Geração)",
        preco:500.90,
        fornecedor:"Amazon",
        url_imagem:"https://c.shld.net/rpx/i/s/i/spin/10000003/prod_2305917712??hei=64&wid=64&qlt=50",
        descricao:"Nosso smart speaker mais popular conta com um design compacto e um display de LED ainda melhor que exibe a hora, o clima, títulos de músicas e mais. Curta o áudio ainda melhor e escute um som vibrante em qualquer ambiente da sua casa, não perca a hora com Alexa e controle dispositivos de casa inteligente compatíveis por detecção de movimento."
    },
    {
        id:4,
        nome:"Echo Dot (5° Geração)",
        preco:300.90,
        fornecedor:"Amazon",
        url_imagem:"https://c.shld.net/rpx/i/s/i/spin/10000003/prod_2305917712??hei=64&wid=64&qlt=50",
        descricao:"Nosso smart speaker mais popular conta com um design compacto e um display de LED ainda melhor que exibe a hora, o clima, títulos de músicas e mais. Curta o áudio ainda melhor e escute um som vibrante em qualquer ambiente da sua casa, não perca a hora com Alexa e controle dispositivos de casa inteligente compatíveis por detecção de movimento."
    }
]
/* O app.use é necessário para poder capturar o body do post */
app.use(express.json())
app.use(cors({origin: 'http://127.0.0.1:5173'}))

app.get("/", (request, response) =>{
    return response.json({ Ping:"Pong"})
})

app.get("/produtos", async (request, response) =>{
    const res = await ProdutoSchema.find()
    return response.json(res)
})

app.get("/produtos/:id", async (request, response) =>{

    const id = request.params.id
    
    const res = await ProdutoSchema.findById(id)
    /* const produto = produtos.find(produto => produto.id === Number(request.params.id)) */

    if(!res){
        return response.status(404).json({message: "item not found"})
    }

    return response.json(res)
})

app.post("/produtos", async (request, response) => {

    const res = await ProdutoSchema.create(request.body)

    /* produtos.push(request.body) */

    return response.status(201).json({res})

})

app.delete("/produtos/:id", async (request, response) => {

    const id = request.params.id
    try{
        await ProdutoSchema.findByIdAndDelete(id)
    
        return response.status(204).json({message: "Item removido com sucesso"})

    }catch(error){
        return response.status(500).json()
    }


    /* const indexProduto = produtos.findIndex(produto => produto.id === Number(request.params.id))

    produtos.splice(indexProduto, 1) */
    
    
})

app.put("/produtos/:id", async (request, response)=>{

    const id = request.params.id

    const body = request.body

    const res = await ProdutoSchema.findByIdAndUpdate({ _id: id}, body)

    /* const indexProduto = produtos.findIndex(produto => produto.id === Number(request.params.id))

    produtos[indexProduto].nome = request.body.nome 
    produtos[indexProduto].fornecedor = request.body.fornecedor
    produtos[indexProduto].descricao = request.body.descricao 
    produtos[indexProduto].url_imagem = request.body.url_imagem */

    return response.json(res)

})


app.listen(PORT, ()=>console.log("Servidor foi iniciado com sucesso em http://localhost:"+PORT))