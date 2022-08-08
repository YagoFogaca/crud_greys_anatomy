const personagens = require('../mocks/personagens.mocks');

function getAllPersonagensService() {
  return personagens;
}

function getByIdPersonagemService(id) {
  let personagem = personagens.find((item) => item.id === id);

  if (personagem === undefined) {
    personagem = 'Personagem não encontrado, tente por outro ID';
  }

  return personagem;
}

function createPersonagemService(personagem) {
  const novoId = personagens.length + 1;

  personagem.id = 'teste';

  personagem.id = novoId;

  personagens.push(personagem);

  return personagem;
}

function updatePersonagemService(id, personagemUpdate) {
  personagemUpdate['id'] = id;

  const personagemIndex = personagens.findIndex((personagem) => personagem.id === id);

  return (personagens[personagemIndex] = personagemUpdate);
}

function deletePersonagemService(id) {
  const personagemIndex = personagens.findIndex((personagem) => personagem.id == id);

  return personagens.splice(personagemIndex, 1);
}

module.exports = {
  getAllPersonagensService,
  getByIdPersonagemService,
  createPersonagemService,
  updatePersonagemService,
  deletePersonagemService,
};
