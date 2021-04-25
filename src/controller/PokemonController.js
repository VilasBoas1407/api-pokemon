import express from 'express'
const PokemonModel = require('../models/Pokemon');

const router = express.Router();

router.get('/pokemon/WhosThatPokemon', async (req, res) => {

    res.status(200).send({
        message: "Esse meu jeito de viver" +
            "Ninguém nunca foi igual" +
            "A minha vida é fazer" +
            "O bem vencer o mal" +

            "Pelo mundo viajarei" +
            "Tentando encontrar" +
            "Um Pokémon e com o seu poder" +
            "Tudo transformar" +

            "(Pokémon! Temos que pegar)" +
            "Isso eu sei" +
            "Pegá-los eu tentarei! (Pokémon!)" +
            "Juntos teremos que" +
            "O mundo defender!" +

            "Pokémon! (Temos que pegá-los)" +
            "Isso eu sei" +
            "Pegá-los eu tentarei" +
            "Vai ser grande a emoção" +
            "Pokémon!" +

            "Temos que pegar" +
            "Temos que pegar!" +

            "Desafios vou encontrar" +
            "E os enfrentarei" +
            "Lutando pelo meu lugar" +
            "Todo dia estarei!"
    })
});

router.post('/pokemon', async (req, res) => {
    try {
        console.log(req.body)
        const result = await PokemonModel.create(req.body);
        res.status(201).send({
            data: result,
            message: "Pokemon cadastrado com sucesso!"
        });
    } catch (err) {
        res.status(500).send({
            message: "Ocorreu um erro ao cadastrar o pokemon! Error:" + err.message
        });
    }
});

router.get('/pokemon', async (req, res) => {

    try {
        const result = await PokemonModel.findAll();
        res.status(200).send({
            data: result
        });
    } catch (err) {
        res.status(500).send({
            message: "Ocorreu um erro ao buscar todos os pokemons! Error:" + err.message
        })
    }

});

router.get('/pokemon/:ID', async (req, res) => {

    try {
        const {
            ID
        } = req.params;

        const result = await PokemonModel.findByPk(ID);
        res.status(200).send({
            data: result
        });

    } catch (err) {
        res.status(500).send({
            message: "Ocorreu um erro ao buscar o pokemon! Error:" + err.message
        });
    }
});

router.put('/pokemon', async (req, res) => {
    try {
        console.log(req.body)
        const pokemon = req.body;

        const model = await PokemonModel.findByPk(pokemon.id);

        model.nome = pokemon.nome;
        model.numero = pokemon.numero;
        model.tipo = pokemon.tipo;
        model.geracao = pokemon.geracao;

        const resultadoSave = await model.save();
        res.status(202).send({
            data: resultadoSave
        });

    } catch (err) {
        res.status(500).send({
            message: "Ocorreu um erro ao atualizar o pokemon! Error:" + err.message
        });
    }

});

router.delete('/pokemon', async (req, res) => {
    try {
        const {
            ID
        } = req.query;

        const pokemon = await PokemonModel.findByPk(ID);
        await pokemon.destroy();

        res.status(200).send({
            message: "Pokemon excluído com sucesso!"
        });

    } catch (err) {
        res.status(500).send({
            message: "Ocorreu um erro ao excluir o pokemon! Error:" + err.message
        });
    }

});

module.exports = router;