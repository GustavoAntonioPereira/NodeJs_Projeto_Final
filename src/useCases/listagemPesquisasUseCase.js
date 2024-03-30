const PesquisaRepositoryNoSQL = require("../repositories/pesquisaRepositoryNoSQL");
async function execute() {
  const repository = new PesquisaRepositoryNoSQL();
  const pesquisas = await repository.findAll();
  return pesquisas;
}

module.exports = { execute };
