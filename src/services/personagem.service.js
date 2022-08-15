const personagens = require('../models/Personagens');

async function getAllPersonagensService() {
  const personagensResults = await personagens.find();

  return personagensResults;
}

async function getByIdPersonagemService(id) {
  const personagem = await personagens.findById(id);

  return personagem;
}

async function createPersonagemService(personagem) {
  const novoPersonagem = await personagens.create(personagem);

  return novoPersonagem;
}

async function updatePersonagemService(id, personagemUpdate) {
  const updatePersonagem = await personagens.findByIdAndUpdate(id, personagemUpdate);

  return updatePersonagem;
}

async function deletePersonagemService(id) {
  const personagemIndex = await personagens.findByIdAndDelete(id);

  return personagemIndex;
}

module.exports = {
  getAllPersonagensService,
  getByIdPersonagemService,
  createPersonagemService,
  updatePersonagemService,
  deletePersonagemService,
};
