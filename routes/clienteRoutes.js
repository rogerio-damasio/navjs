const express = require("express");
const router = express.Router();

let clientes = [
  {
    id: 1,
    nome: "Roger",
    email: "a@gmail.com",
    telefone:123456789,
    cidade:"Itu"
  },
  {
    id: 2,
    nome: "Nathy",
    email: "b@gmail.com",
    telefone:987654321,
    cidade:"Itu"
  }
];


router.get("/", (req, res) => {
    res.render("clientes/index", {
        clientes: clientes
    });
});

router.get("/cadastro", (req, res) =>{
  res.render("clientes/form-cadastro",)
});

router.post("/", (req, res) => {
  const {nome, email, telefone, cidade} = req.body;
  const novaCliente = {
    id: clientes.length + 1,
    nome: nome,
    email: email,
    telefone: telefone,
    cidade: cidade
  };
  clientes.push(novaCliente);
  res.redirect("/clientes");
});

module.exports = router;