const {
  startConnection,
  stopConnection,
} = require("../infra/database/mongodb");
const PesquisaModel = require("../infra/models/pesquisa");

class PesquisaRepositoryNoSQL {
  async findAll() {
    try {
      await startConnection();
      const pesquisas = await PesquisaModel.find();
      await stopConnection();
      return pesquisas;
    } catch (error) {
      console.log("ERROR::PesquisaRepositoryNoSQL::findAll::error", error);
      throw new Error("Erro ao tentar consultar as pesquisas");
    }
  }

  async create(pesquisa) {
    try {
      await startConnection();
      await PesquisaModel.create(pesquisa);
      await stopConnection();
    } catch (error) {
      console.log("ERROR::PesquisaRepositoryNoSQL::create::error", error);
      throw new Error("Erro ao tentar criar a pesquisa");
    }
  }

  async removeById(_id) {
    try {
      await startConnection();
      await PesquisaModel.deleteOne({ _id });
      await stopConnection();
    } catch (error) {
      console.log("ERROR::PesquisaRepositoryNoSQL::removeById::error", error);
      throw new Error("Erro ao tentar remover a pesquisa");
    }
  }

  async updateById(_id, dados) {
    try {
      await startConnection();
      await PesquisaModel.updateOne({ _id }, dados);
      await stopConnection();
    } catch (error) {
      console.log("ERROR::PesquisaRepositoryNoSQL::updateById::error", error);
      throw new Error("Erro ao tentar fazer uma atualização na pesquisa");
    }
  }

  async findById(_id) {
    try {
      await startConnection();
      const pesquisa = await PesquisaModel.findById(_id);
      await stopConnection();
      return pesquisa;
    } catch (error) {
      console.log("ERROR::PesquisaRepositoryNoSQL::findById::error", error);
      throw new Error("Erro ao tentar encontrar a pesquisa por ID");
    }
  }
}

module.exports = PesquisaRepositoryNoSQL;
