const PesquisaRepositoryNoSQL = require("../repositories/pesquisaRepositoryNoSQL");
async function execute(_id) {
  const repository = new PesquisaRepositoryNoSQL();
  try {
    console.log("RemoverPesquisaPorIdUseCase::execute::pesquisa", _id);
    await repository.removeById(_id);
    return {
      success: true,
    };
  } catch (error) {
    console.log("ERROR::RemoverPesquisaPorIdUseCase::execute::error", error);
    return {
      success: false,
      httpCode: 500,
      errorMessage:
        "Ocorreu um erro ao tentar excluir a pesquisa, tente daqui a pouco",
    };
  }
}

module.exports = { execute };
