import express from 'express';
const TreinadorModel = require('../models/Treinadores');

const router = express.Router();

router.post('/treinador', async (req, res) => {
    try {
        //inserir umas validações depois
        const result = await TreinadorModel.create(req.body);
        res.status(201).send({
            data: result,
            message: "Treinador cadastrado com sucesso!"
        });
    } catch (err) {
        res.status(500).send({
            message: "Ocorreu um erro ao cadastrar o treinador! Error:" + err.message
        });
    }
});

router.get('/treinador', async (req, res) => {

    try {
        const result = await TreinadorModel.findAll();
        res.status(200).send({
            data: result
        });
    } catch (err) {
        res.status(500).send({
            message: "Ocorreu um erro ao buscar todos os treinadores! Error:" + err.message
        })
    }

});

router.get('/treinador/:ID', async (req, res) => {

    try {
        const {
            ID
        } = req.params;

        const result = await TreinadorModel.findByPk(ID);
        res.status(200).send({
            data: result
        });

    } catch (err) {
        res.status(500).send({
            message: "Ocorreu um erro ao buscar o treinador! Error:" + err.message
        });
    }
});

router.put('/treinador', async (req, res) => {
    try {
        console.log(req.body)
        const treinador = req.body;

        const model = await TreinadorModel.findByPk(treinador.id);

        model.nome = treinador.nome;
        model.idade = treinador.idade;
        model.level = treinador.level;
        model.pokemonPreferido = treinador.pokemonPreferido;

        const resultadoSave = await model.save();
        res.status(202).send({
            data: resultadoSave
        });

    } catch (err) {
        res.status(500).send({
            message: "Ocorreu um erro ao atualizar o treinador! Error:" + err.message
        });
    }

});

router.delete('/treinador', async (req, res) => {
    try {
        const {
            ID
        } = req.query;

        const treinador = await TreinadorModel.findByPk(ID);
        await treinador.destroy();

        res.status(200).send({
            message: "Treinador excluído com sucesso!"
        });

    } catch (err) {
        res.status(500).send({
            message: "Ocorreu um erro ao excluir o treinador! Error:" + err.message
        });
    }

});

module.exports = router;