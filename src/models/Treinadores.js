const Sequelize = require('sequelize');
const database = require('./db');

const Treinador = database.define('Treinadores', {
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
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    level: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    pokemonPreferido: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Treinador;