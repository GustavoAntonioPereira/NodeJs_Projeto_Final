const atualizarPesquisaPorIdUseCase = require("../useCases/atualizarPesquisaPorIdUseCase");

async function atualizarPesquisaPorIdController(req, res) {
  const { id } = req.params;
  const dados = req.body;

  if (!id) {
    return res.status(400).send({
      message: "O ID da pesquisa para atualização deve ser informado",
    });
  }
  const { success, httpCode, errorMessage } =
    await atualizarPesquisaPorIdUseCase.execute(id, dados);
  if (!success) {
    return res.status(httpCode).send({ message: errorMessage });
  }

  return res.send();
}

module.exports = atualizarPesquisaPorIdController;
