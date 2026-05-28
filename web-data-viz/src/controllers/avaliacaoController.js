var avaliacaoModel = require("../models/avaliacaoModel");


// function cadastrarAvaliacaoBra(req, res) {
//     // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
//     var dataPartida = req.body.dataPartidaServer;
//     var fkbrasileirao = req.body.fkbrasileiraoServer;
//     var  notaPartida = req.body.notaPartidaServer;

//     // Faça as validações dos valores
//     if (dataPartida == undefined) {
//         res.status(400).send("Seu nome está undefined!");
//     } else if (fkbrasileirao == undefined) {
//         res.status(400).send("Sua senha está undefined!");
//     } else if (notaPartida == undefined) {
//         res.status(400).send("Sua empresa a vincular está undefined!");
//     } else {

//         // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
//         avaliacaoModel.cadastrarAvaliacaoBra(dataPartida, fkbrasileirao, notaPartida)
//             .then(
//                 function (resultado) {
//                     res.json(resultado);
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log(
//                         "\nHouve um erro ao realizar o cadastro! Erro: ",
//                         erro.sqlMessage
//                     );
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }
// }
function cadastrarAvaliacaoCdb(req, res) {
    var fkCopaDoBrasil = req.body.fkCopaDoBrasilServer || '';
    var fkBrasileirao  = req.body.fkBrasileiraoServer  || '';
    var notaPartida    = req.body.notaPartidaServer;
    var fkUsuario      = req.body.fkUsuarioServer;
    var comentario     = req.body.comentarioServer;
    var dataAvaliacao  = req.body.dataAvaliacaoServer;

    if (!fkUsuario) {
        return res.status(400).send("Usuário não identificado!");
    } else if (!notaPartida) {
        return res.status(400).send("Nota da partida está undefined!");
    }

    // ordem correta: fkCopaDoBrasil, fkBrasileirao, fkUsuario, notaPartida, comentario, dataAvaliacao
    avaliacaoModel.cadastrarAvaliacaoCdb(fkCopaDoBrasil, fkBrasileirao, fkUsuario, notaPartida, comentario, dataAvaliacao)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}
module.exports = {
    cadastrarAvaliacaoCdb  
}