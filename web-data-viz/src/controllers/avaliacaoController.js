var avaliacaoModel = require("../models/avaliacaoModel");


function cadastrarAvaliacaoBra(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var dataPartida = req.body.dataPartidaServer;
    var adversario = req.body.adversarioServer;
    var fkbrasileirao = req.body.fkbrasileiraoServer;
    var  notaPartida = req.body.notaPartidaServer;

    // Faça as validações dos valores
    if (dataPartida == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (adversario == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (fkbrasileirao == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (notaPartida == undefined) {
        res.status(400).send("Sua empresa a vincular está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        avaliacaoModel.cadastrarAvaliacaoBra(dataPartida, adversario, fkbrasileirao, notaPartida)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function cadastrarAvaliacaoCdb(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var dataPartida = req.body.dataPartidaServer;
    var adversario = req.body.adversarioServer;
    var fkCopaDoBrasil = req.body.fkCopaDoBrasilServer;
    var  notaPartida = req.body.notaPartidaServer;

    // Faça as validações dos valores
    if (dataPartida == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (adversario == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (fkCopaDoBrasil == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (notaPartida == undefined) {
        res.status(400).send("Sua empresa a vincular está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        avaliacaoModel.cadastrarAvaliacaoCdb(dataPartida, adversario, fkCopaDoBrasil, notaPartida)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrarAvaliacaoBra,
    cadastrarAvaliacaoCdb  
}