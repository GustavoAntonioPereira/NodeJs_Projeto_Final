const PesquisaRepositoryNoSQL = require("../repositories/pesquisaRepositoryNoSQL");
async function execute(_id, dados) {
  const repository = new PesquisaRepositoryNoSQL();
  const pesquisaAtual = await repository.findById(_id);

  if (
    dados.url !== pesquisaAtual.url ||
    dados.data !== pesquisaAtual.data ||
    dados.titulo !== pesquisaAtual.titulo ||
    dados.id !== pesquisaAtual.id
  ) {
    throw new Error(
      "Não é permitido atualizar os campos 'url', 'data' e 'titulo'."
    );
  }
  try {
    console.log("AtualizarPesquisaPorIdUseCase::execute::pesquisa", _id, dados);
    await repository.updateById(_id, dados);
    return {
      success: true,
    };
  } catch (error) {
    console.log("ERROR::AtualizarPesquisaPorIdUseCase::execute::error", error);
    return {
      success: false,
      httpCode: 500,
      errorMessage:
        "Ocorreu um erro ao tentar fazer uma atualização na pesquisa, tente daqui a pouco",
    };
  }
}

module.exports = { execute };
