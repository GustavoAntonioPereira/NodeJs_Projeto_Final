const listagemPesquisasUseCase = require("../useCases/listagemPesquisasUseCase");

async function listagemPesquisasController(req, res) {
  const pesquisas = await listagemPesquisasUseCase.execute();
  return res.send(pesquisas);
}

module.exports = listagemPesquisasController;
