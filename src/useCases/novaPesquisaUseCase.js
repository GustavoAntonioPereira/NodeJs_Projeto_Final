const PesquisaRepositoryNoSQL = require("../repositories/pesquisaRepositoryNoSQL");
async function execute(pesquisa) {
  const repository = new PesquisaRepositoryNoSQL();
  try {
    const pesquisas = await repository.findAll();
    const proximoId = () => {
      if (pesquisas.length === 0) {
        return 1;
      }
      const maxId = Math.max(...pesquisas.map((pesquisa) => pesquisa.id));
      return maxId + 1;
    };
    pesquisa.id = proximoId();
    console.log("NovaPesquisaUseCase::execute::pesquisa", pesquisa);

    await repository.create(pesquisa);
    return {
      success: true,
    };
  } catch (error) {
    console.log("ERROR::NovaPesquisaUseCase::execute::error", error);
    return {
      success: false,
      httpCode: 500,
      errorMessage:
        "Ocorreu um erro ao tentar criar a nova pesquisa, tente daqui a pouco",
    };
  }
}

module.exports = { execute };
