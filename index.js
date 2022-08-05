const express = require('express');
//require manda ir dentro de node_modules e traz o express

const cors = require('cors');

const personagens = require('./mocks/personagens.mocks');

const port = 3000;

const app = express();
// app executa express e recebe todas as suas funções

app.use(express.json());

app.use(cors());

// app.get cria uma rotas de acesso (endpoint) do tipo get (Pegar um informação) e toda rota tera uma função que ira trazer uma resposta correspondente a aquela rota
app.get('/personagens', (req, res) => {
  // a resposta da requisição feita pela rota é pelo res.send(), sendo o send uma função de apresentação na tela
  res.send(personagens);
});

app.get('/personagens/personagemId/:id', (req, res) => {
  const parametroId = Number(req.params.id);

  let personagem = '';

  personagens.forEach((itens) => {
    if (itens.id === parametroId) {
      console.log(itens);

      personagem = itens;
    }
  });

  if (personagem === '') {
    res.send('Não foi possível achar esse personagem, tente com outro ID');
  }

  res.send(personagem);
});

// o listen faz com que o servidor escute a porta que definimos na variavel port, ou seja, ele está executando o servidor
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
