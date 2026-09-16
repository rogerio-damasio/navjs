const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT||3000;

// CONFIGURAÇÃO DO EJS
app.set("view engine", "ejs");

app.set(
    "views",
    path.join(__dirname, "views")
);


// MIDDLEWARES
// Permite receber dados enviados por formulário
app.use(express.urlencoded({ extended: true }));
// Permite receber requisições com JSON
app.use(express.json());


// ROTAS
const categoriaRoutes = require("./routes/categoriaRoutes");
app.use("/categorias", categoriaRoutes);

const clienteRoutes = require("./routes/clienteRoutes");
app.use("/clientes", clienteRoutes);

const fornecedorRoutes = require("./routes/fornecedorRoutes");
app.use("/fornecedores", fornecedorRoutes);

const produtoRoutes = require("./routes/produtoRoutes");
app.use("/produtos", produtoRoutes);


// ROTA PRINCIPAL - index.ejs de views
app.get("/", (req, res) => {
    res.send("Rodando no Render");
});


// SERVIDOR
app.listen(PORT, () => {
    console.log(
        "Servidor rodando na porta ${PORT}"
    );
});
