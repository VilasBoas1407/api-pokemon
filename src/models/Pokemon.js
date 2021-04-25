const Sequelize = require('sequelize');
const database = require('./db');

const Pokemon = database.define('Pokemons', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    tipo: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    geracao: {
        allowNull: false,
        type: Sequelize.STRING,
    },
});

module.exports = Pokemon;