var database = require("../database/config")

function totalAvaliacoes() {
    var instrucaoSql = `
        SELECT COUNT(*) AS total FROM avaliacao;
    `;
    return database.executar(instrucaoSql);
}

function mediaNota() {
    var instrucaoSql = `
        SELECT notaPartida, COUNT(*) AS quantidade
        FROM avaliacao
        GROUP BY notaPartida
        ORDER BY quantidade DESC
        LIMIT 1;
    `;
    return database.executar(instrucaoSql);
}

function jogadorFavorito() {
    var instrucaoSql = `
        SELECT jogador, COUNT(*) AS votos
        FROM usuario
        WHERE jogador IS NOT NULL
        GROUP BY jogador
        ORDER BY votos DESC
        LIMIT 1;
    `;
    return database.executar(instrucaoSql);
}
function DadosDashboard(){
        var instrucaoSql = `
        SELECT notaPartida, COUNT(*) AS quantidade
        FROM avaliacao
        GROUP BY notaPartida
        ORDER BY quantidade DESC;
    `;

    return database.executar(instrucaoSql);
} 
function filtro_dados_dashboard(dataPartida){
    var instrucaoSql = `
    select * from vw_dados
    where dataPartida = "${dataPartida}";
    `
    return database.executar(instrucaoSql);
}


module.exports = {
    totalAvaliacoes,
    mediaNota,
    jogadorFavorito,
    DadosDashboard
};