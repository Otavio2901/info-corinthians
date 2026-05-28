var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
// router.post("/cadastrarAvaliacaoBra", function (req, res) {
//     avaliacaoController.cadastrarAvaliacaoBra(req, res);
// });

router.post("/cadastrarAvaliacaoCdb", function (req, res) {
    avaliacaoController.cadastrarAvaliacaoCdb(req, res);
});


module.exports = router;