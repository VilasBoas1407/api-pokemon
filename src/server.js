import express from 'express';

//const PokemonController = require('./src/controller/PokemonController');
const TreinadorController = require('./controller/TreinadorController');

const application = express();
application.use(express.json());
application.use(express.urlencoded())

//sapplication.use('/api', PokemonController);
application.use('/api', TreinadorController);

module.exports = application;