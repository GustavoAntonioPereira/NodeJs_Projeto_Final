const removerPesquisaPorIdUseCase = require("../useCases/removerPesquisaPorIdUseCase");

async function removerPesquisaPorIdController(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({
      message: "O ID da pesquisa para exclusão deve ser informado",
    });
  }
  const { success, httpCode, errorMessage } =
    await removerPesquisaPorIdUseCase.execute(id);
  if (!success) {
    return res.status(httpCode).send({ message: errorMessage });
  }

  return res.send();
}

module.exports = removerPesquisaPorIdController;
