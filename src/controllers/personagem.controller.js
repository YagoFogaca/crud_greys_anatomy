const personagensServices = require('../services/personagem.service');

function getAllPersonagensController(req, res) {
  const personagens = personagensServices.getAllPersonagensService();

  res.send(personagens);
}

function getByIdPersonagemController(req, res) {
  const parametroId = Number(req.params.id);

  const personagem = personagensServices.getByIdPersonagemService(parametroId);

  res.send(personagem);
}

function createPersonagemController(req, res) {
  const personagem = req.body;

  const novoPersonagem = personagensServices.createPersonagemService(personagem);

  res.send(novoPersonagem);
}

function updatePersonagemController(req, res) {
  const parametroId = Number(req.params.id);

  const personagemUpdate = req.body;

  const personagem = personagensServices.updatePersonagemService(parametroId, personagemUpdate);

  res.send(personagem);
}

function deletePersonagemController(req, res) {
  const parametroId = req.params.id;

  personagensServices.deletePersonagemService(parametroId);

  res.send({
    message: `Personagem deletado com sucesso.`,
  });
}

module.exports = {
  getAllPersonagensController,
  getByIdPersonagemController,
  createPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
};
