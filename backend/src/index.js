const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

/*
* Rota/recurso

Métodos HTTP

GET: buscar uma informação do back-end;
POST: CRiar uma informação no back-end;
PUT: Alterar uma informação  no back-end;
DELETE: Deletar uma informação no back-end


Tipos de Parâmetros

Query: parâmetros nomeados enviados na rota após
símbolo de "?", usado para filtros, paginação, etc.

Routes: Utilizados para identificar recursos.

Request Body: Corpo da requisição, utilizado para
criar ou alterar recursos.


BANCO DE DADOS

--> SQL: MySQL, SQLite
--> NoSQL: MongoDB, CouchDB, etc

--> DRIVER do banco de dados
--> Query Builder

*/



app.listen(3333);