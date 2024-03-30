const { Schema, model } = require("mongoose");

const pesquisaSchema = new Schema(
  {
    id: Number,
    url: String,
    titulo: String,
    subtitulo: String,
    reacoes: Number,
    respostas: Number,
    tempoDeLeitura: Number,
    publicacao: String,
    data: String,
  },
  { timestamps: true }
);

module.exports = model("pesquisas", pesquisaSchema);
