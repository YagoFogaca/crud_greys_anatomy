# crud_greys_anatomy

**Como iniciar o projeto:**
_npm init_
Cria o arquivo packsge.json
_npm i express_
Instala o express

- O nodemon é uma biblioteca que facilita a vida de quem é Dev Node, ela tem a função de ver as alterações no nosso código e reiniciar a nossa aplicação automaticamente, sem a necessidade de que façamos isso.
  Para utilizarmos no nosso projeto vamos instalá-la através do terminal:
  _npm i nodemon -D_

- Em seguida, vamos criar um script no arquivo package.json para podermos utilizá-la através do npm scripts:
  "scripts": {
  "start": "node index",
  "dev": "nodemon index"
  },

- Feito isso, podemos iniciar a nossa API através do comando no terminal:
  _npm run dev_

- Para configurar o CORS no Express da forma mais fácil, vamos instalar a biblioteca cors através do seguinte comando no terminal:
  _npm i cors_

**Criar arquivo index.js**

**MÉTODOS HTTP**

- GET http://minhaapi.com/users ➔ Buscar alguma informação no back-end
- POST http://minhaapi.com/users ➔ Criar alguma informação no back-end
- PUT http://minhaapi.com/users/1 ➔ Editar alguma informação no back-end
- DELETE http://minhaapi.com/users/1 ➔ Deletar alguma informação no back-end
- Negrito ➔ Método HTTP
- Itálico ➔ Recurso/Rota
- Número ➔ Parâmetro
