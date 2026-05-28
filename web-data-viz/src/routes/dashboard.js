var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
// router.post("/cadastrarAvaliacaoBra", function (req, res) {
//     avaliacaoController.cadastrarAvaliacaoBra(req, res);
// });
router.get("/kpis/avaliacoes", function (req, res) {
    dashboardController.buscarKpiAvaliacoes(req, res);
})
router.get("/kpis/mediaNota", function (req, res) {
    dashboardController.buscarKpiNotaPartidas(req, res);
})
router.get("/kpis/jogadorFavorito", function (req, res) {
    dashboardController.buscarKpiJogador(req, res);
})
router.get("/grafico/DadosDashboard", function (req, res) {
    dashboardController.buscarDadosDashboard(req, res);
})



module.exports = router;
