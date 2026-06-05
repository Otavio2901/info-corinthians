var dashboardModel = require("../models/dashboardModel");


function buscarKpiAvaliacoes(req, res) {
    dashboardModel.totalAvaliacoes().then((dados) => res.json(dados));
}
function buscarKpiNotaPartidas(req, res){
    dashboardModel.mediaNota().then((dados) => res.json(dados));
}
function jogadorFavoritoUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    if (!idUsuario) {
        return res.status(400).send("Usuário não identificado!");
    }

    dashboardModel.jogadorFavoritoUsuario(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}
function buscarDadosDashboard(req, res){
    dashboardModel.DadosDashboard().then((dados) => res.json(dados));
}
module.exports = {
    buscarKpiAvaliacoes,
    buscarKpiNotaPartidas,
    jogadorFavoritoUsuario,
    buscarDadosDashboard
}



