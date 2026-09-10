const express = require("express");
const router = express.Router();

let produtos = [
  {
    id: 1,
    nome: "Sabão",
    descricao: "Sabão",
    preco:19.99,
    estoque:200,
    categoria: "Cuidado Pessoal"
  },
 {
    id: 2,
    nome: "Lâmpada",
    descricao: "Lâmpada",
    preco:18.99,
    estoque:300,
    categoria: "Energia"
  }
];


router.get("/", (req, res) => {
    res.render("produtos/index", {
        produtos: produtos 
    });
});

router.get("/cadastro", (req, res) =>{
  res.render("produtos/form-cadastro",)
});

router.post("/", (req, res) => {
  const {nome, descricao, preco, estoque, categoria} = req.body;
  const novaProduto = {
    id: produtos.length + 1,
    nome: nome,
    descricao: descricao,
    preco: preco,
    estoque: estoque,
    categoria: categoria
  };
  produtos.push(novaProduto);
  res.redirect("/produtos");
});

module.exports = router;