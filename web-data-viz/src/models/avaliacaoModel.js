var database = require("../database/config")

// function cadastrarAvaliacaoBra(dataPartida, fkbrasileirao, notaPartida) {
//     var instrucaoSql = `
// INSERT INTO avaliacao
// (dataPartida, fkBrasileirao, notaPartida)
// VALUES
// ('${dataPartida}' , '${fkbrasileirao}', '${notaPartida}');
// `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrarAvaliacaoCdb(fkCopaDoBrasil, fkBrasileirao, fkUsuario, notaPartida, comentario, dataAvaliacao) {
    var instrucaoSql = '';

    if (fkCopaDoBrasil) {
        instrucaoSql = `
            INSERT INTO avaliacao (fkCopaDoBrasil, notaPartida, fkUsuario, dataAvaliacao, comentario)
            VALUES ('${fkCopaDoBrasil}', '${notaPartida}', '${fkUsuario}', CURRENT_TIMESTAMP(), '${comentario}');
        `;
    } else if (fkBrasileirao) {
        instrucaoSql = `
            INSERT INTO avaliacao (fkBrasileirao, notaPartida, fkUsuario, dataAvaliacao, comentario)
            VALUES ('${fkBrasileirao}', '${notaPartida}', '${fkUsuario}', CURRENT_TIMESTAMP(), '${comentario}');
        `;
    }

    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarAvaliacaoCdb
};

//*autenticar