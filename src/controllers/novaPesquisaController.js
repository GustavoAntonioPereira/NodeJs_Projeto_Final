const novaPesquisaUseCase = require("../useCases/novaPesquisaUseCase");

async function novaPesquisaController(req, res) {
  const pesquisa = req.body;
  const { id, url, titulo, reacoes, publicacao, data } = pesquisa;
  if (!id || !url || !titulo || !reacoes || !publicacao || !data) {
    return res.status(400).send({
      message:
        "Todos os campos devem ser preenchidos: id,url, tittulo, reacoes, publicacao, data",
    });
  }
  const { success, httpCode, errorMessage } = await novaPesquisaUseCase.execute(
    pesquisa
  );
  if (!success) {
    return res.status(httpCode).send({ message: errorMessage });
  }

  return res.send();
}

module.exports = novaPesquisaController;
