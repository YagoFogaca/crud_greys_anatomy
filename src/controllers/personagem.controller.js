const personagensServices = require('../services/personagem.service');

const mongoose = require('mongoose');

async function getAllPersonagensController(req, res) {
  const personagens = await personagensServices.getAllPersonagensService();

  res.send(personagens);
}

async function getByIdPersonagemController(req, res) {
  const parametroId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ menssage: 'ID invalido' });
  }

  const personagem = await personagensServices.getByIdPersonagemService(parametroId);

  if (!personagem) {
    return res.status(404).send({ message: 'Personagem não encontrado' });
  }

  res.status(200).send(personagem);
}

async function createPersonagemController(req, res) {
  const personagem = req.body;

  if (
    !personagem ||
    !personagem.nome ||
    !personagem.sobrenome ||
    !personagem.idade ||
    !personagem.status ||
    !personagem.especialidade ||
    !personagem.primeiro_temp ||
    !personagem.ultimo_temp
  ) {
    return res.status(400).send({ menssage: 'Todos os campos devem ser preencidos' });
  }

  const novoPersonagem = await personagensServices.createPersonagemService(personagem);

  res.status(201).send(novoPersonagem);
}

async function updatePersonagemController(req, res) {
  const parametroId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ menssage: 'ID invalido' });
  }

  const personagemUpdate = req.body;

  if (
    !personagemUpdate ||
    !personagemUpdate.nome ||
    !personagemUpdate.sobrenome ||
    !personagemUpdate.idade ||
    !personagemUpdate.status ||
    !personagemUpdate.especialidade ||
    !personagemUpdate.primeiro_temp ||
    !personagemUpdate.ultimo_temp
  ) {
    return res.status(400).send({ menssage: 'Todos os campos devem ser preencidos' });
  }

  const personagem = await personagensServices.updatePersonagemService(parametroId, personagemUpdate);

  if (!personagem) {
    return res.status(404).send({ message: 'Personagem não encontrado' });
  }

  res.send(personagem);
}

async function deletePersonagemController(req, res) {
  const parametroId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ menssage: 'ID invalido' });
  }

  const personagemDeletado = await personagensServices.deletePersonagemService(parametroId);

  if (!personagemDeletado) {
    return res.status(404).send({ message: `Personagem não encontrado.` });
  }

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
