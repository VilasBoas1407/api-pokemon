'use strict';
/*
Esse meu jeito de viver
Ninguém nunca foi igual
A minha vida é fazer
O bem vencer o mal

Pelo mundo viajarei
Tentando encontrar
Um Pokémon e com o seu poder
Tudo transformar

(Pokémon! Temos que pegar)
Isso eu sei
Pegá-los eu tentarei! (Pokémon!)
Juntos teremos que
O mundo defender!

Pokémon! (Temos que pegá-los)
Isso eu sei
Pegá-los eu tentarei
Vai ser grande a emoção
Pokémon!

Temos que pegar
Temos que pegar!

Desafios vou encontrar
E os enfrentarei
Lutando pelo meu lugar
Todo dia estarei!
 */
module.exports = {
  //
  up: async (queryInterface, DataTypes) => {

    return queryInterface.createTable('Pokemons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      numero: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      tipo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      geracao: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pokemon');
  }

};