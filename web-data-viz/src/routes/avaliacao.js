var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/avaliacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarAvaliacaoBra", function (req, res) {
    avaliacaoController.cadastrar(req, res);
})

router.post("/cadastrarAvaliacaoCdb", function (req, res) {
    avaliacaoController.cadastrar(req, res);
})



module.exports = router;

