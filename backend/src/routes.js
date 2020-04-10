const express = require('express');

const OngControler = require('./controlers/OngControler');
const IncidentControler = require('./controlers/IncidentControler');

const ProfileControler = require('./controlers/ProfileControler');

const SessionControler = require('./controlers/SessionControler');

const routes = express.Router();

//Rota Para Fazer o LogIn da ONG.
routes.post('/sessions',SessionControler.create);


//Rota Para Listar todas as ONGs.
routes.get('/ongs', OngControler.index);

// Rota Para Cadastrar ONGS.
routes.post('/ongs', OngControler.create);


//Rota Para Listar todos os Casos.
routes.get('/incidents', IncidentControler.index);

//Rota Para Criação de um Caso.
routes.post('/incidents', IncidentControler.create);

//Rota Para Deletar um Caso.
routes.delete('/incidents/:id',IncidentControler.delete);


//Rota Para Mostrar os Casos de Uma ONG Específica.
routes.get('/profile', ProfileControler.index);


module.exports = routes;