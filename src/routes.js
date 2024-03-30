const { Router } = require("express");
const listagemPesquisasController = require("./controllers/listagemPesquisasController.js");
const novaPesquisaController = require("./controllers/novaPesquisaController.js");
const removerPesquisaPorIdController = require("./controllers/removerPesquisaPorIdController.js");
const atualizarPesquisaPorIdController = require("./controllers/atualizarPesquisaPorIdController.js");

const routes = Router();

routes.get("/pesquisas", listagemPesquisasController);
routes.post("/pesquisa", novaPesquisaController);
routes.delete("/pesquisa/:id", removerPesquisaPorIdController);
routes.put("/pesquisa/:id", atualizarPesquisaPorIdController);

module.exports = routes;
