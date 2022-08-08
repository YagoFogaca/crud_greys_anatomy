const router = require('express').Router();

const personagensControllers = require('../controllers/personagem.controller');

router.get('/todos-personagens', personagensControllers.getAllPersonagensController);

router.get('/personagem/:id', personagensControllers.getByIdPersonagemController);

router.post('/create', personagensControllers.createPersonagemController);

router.put('/update/:id', personagensControllers.updatePersonagemController);

router.delete('/delete/:id', personagensControllers.deletePersonagemController);

module.exports = router;
