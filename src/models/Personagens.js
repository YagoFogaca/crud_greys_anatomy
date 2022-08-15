const mongoose = require('mongoose');

const { Schema } = mongoose;

const PersonagemSchema = new Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  idade: { type: Number, required: true },
  status: { type: String, required: true },
  especialidade: { type: String, required: true },
  primeiro_temp: { type: Number, required: true },
  ultimo_temp: { type: Number, required: true },
});

const Personagem = mongoose.model('personagens', PersonagemSchema);

module.exports = Personagem;
