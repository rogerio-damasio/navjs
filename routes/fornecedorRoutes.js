const express = require("express");
const router = express.Router();

let fornecedores = [
  {
    id: 1,
    razaoSocial: "AVON",
    cnpj: 123456789,
    email:"ab@gmail.com",
    telefone:123456789,
    cidade:"Itu"
  },
  {
    id: 2,
    razaoSocial: "Natura",
    cnpj: 987654321,
    email:"cd@gmail.com",
    telefone:987654321,
    cidade:"Itu"
  }
];


router.get("/", (req, res) => {
    res.render("fornecedores/index", {
        fornecedores: fornecedores 
    });
});

router.get("/cadastro", (req, res) =>{
  res.render("fornecedores/form-cadastro",)
});

router.post("/", (req, res) => {
  const {razaoSocial, cnpj, email, telefone, cidade} = req.body;
  const novaFornecedor = {
    id: fornecedores.length + 1,
    razaoSocial: razaoSocial,
    cnpj:cnpj,
    email:email,
    telefone: telefone,
    cidade:cidade
  };
  fornecedores.push(novaFornecedor);
  res.redirect("/fornecedores");
});

module.exports = router;