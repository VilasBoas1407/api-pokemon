const Sequelize = require('sequelize');
const sequelize = new Sequelize('Pokedex', 'sa', '123456', {
    dialect: 'mssql',
    host: '127.0.0.1'
});

module.exports = sequelize;