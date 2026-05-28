var dashboardModel = require("../models/dashboardModel");


function buscarKpiAvaliacoes(req, res) {
    dashboardModel.totalAvaliacoes().then((dados) => res.json(dados));
}
function buscarKpiNotaPartidas(req, res){
    dashboardModel.mediaNota().then((dados) => res.json(dados));
}
function buscarKpiJogador(req, res){
    dashboardModel.jogadorFavorito().then((dados) => res.json(dados));
}
function buscarDadosDashboard(res, req){
    dashboardModel.DadosDashboard().then((dados) => res.json(dados));
}
module.exports = {
    buscarKpiAvaliacoes,
    buscarKpiNotaPartidas,
    buscarKpiJogador,
    buscarDadosDashboard
}



