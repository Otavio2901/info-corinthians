CREATE DATABASE info_timao;

USE info_timao;

CREATE TABLE USUARIO (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100),
    senha VARCHAR(30)
);

CREATE TABLE avaliacao (
    idAvaliacao INT PRIMARY KEY AUTO_INCREMENT,
    notaPartida VARCHAR(20),
    comentario VARCHAR(300),
    dataAvaliacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkUsuario INT,
    fkPartida int,
    CONSTRAINT fkUsuarioAvaliacao FOREIGN KEY (fkUsuario)
        REFERENCES usuario (idUsuario),
	CONSTRAINT fkPartidaAvaliacao FOREIGN KEY (fkPartida)
        REFERENCES partida (idPartida)
);

CREATE TABLE PARTIDA(
idPartida INT PRIMARY KEY AUTO_INCREMENT,
dataPartida DATE, 
adversario VARCHAR(50),
campeonato VARCHAR(50)
);

INSERT INTO partida (dataPartida, adversario, campeonato) VALUES
('30-03-2025', 'Bahia', 'Brasileirão'),
('05-04-2025', 'Vasco da Gama', 'Brasileirão'),
('12-04-2025', 'Palmeiras', 'Brasileirão'),
('16-04-2025', 'Fluminense', 'Brasileirão'),
('19-04-2025', 'Sport', 'Brasileirão'),
('27-04-2025', 'Flamengo', 'Brasileirão'),
('03-05-2025', 'Internacional', 'Brasileirão'),
('10-05-2025', 'Mirassol', 'Brasileirão'),
('18-05-2025', 'Santos', 'Brasileirão'),
('24-05-2025', 'Atlético-MG', 'Brasileirão'),
('01-06-2025', 'Vitória', 'Brasileirão'),
('12-06-2025', 'Grêmio', 'Brasileirão'),
('13-07-2025', 'Red Bull Bragantino', 'Brasileirão'),
('16-07-2025', 'Ceará', 'Brasileirão'),
('19-07-2025', 'São Paulo', 'Brasileirão'),
('23-07-2025', 'Cruzeiro', 'Brasileirão'),
('26-07-2025', 'Botafogo', 'Brasileirão'),
('03-08-2025', 'Fortaleza', 'Brasileirão'),
('11-08-2025', 'Juventude', 'Brasileirão'),
('16-08-2025', 'Bahia', 'Brasileirão'),
('24-08-2025', 'Vasco da Gama', 'Brasileirão'),
('31-08-2025', 'Palmeiras', 'Brasileirão'),
('13-09-2025', 'Fluminense', 'Brasileirão'),
('21-09-2025', 'Sport', 'Brasileirão'),
('28-09-2025', 'Flamengo', 'Brasileirão'),
('01-10-2025', 'Internacional', 'Brasileirão'),
('04-10-2025', 'Mirassol', 'Brasileirão'),
('15-10-2025', 'Santos', 'Brasileirão'),
('18-10-2025', 'Atlético-MG', 'Brasileirão'),
('25-10-2025', 'Vitória', 'Brasileirão'),
('02-11-2025', 'Grêmio', 'Brasileirão'),
('05-11-2025', 'Red Bull Bragantino', 'Brasileirão'),
('09-11-2025', 'Ceará', 'Brasileirão'),
('20-11-2025', 'São Paulo', 'Brasileirão'),
('23-11-2025', 'Cruzeiro', 'Brasileirão'),
('30-11-2025', 'Botafogo', 'Brasileirão'),
('03-12-2025', 'Fortaleza', 'Brasileirão'),
('07-12-2025', 'Juventude', 'Brasileirão'),
('30-04-2025', 'Novorizontino', 'Copa do Brasil'),
('21-05-2025', 'Novorizontino', 'Copa do Brasil'),
('30-07-2025', 'Palmeiras', 'Copa do Brasil'),
('06-08-2025', 'Palmeiras', 'Copa do Brasil'),
('27-08-2025', 'Athletico Paranaense', 'Copa do Brasil'),
('10-09-2025', 'Athletico Paranaense', 'Copa do Brasil'),
('10-12-2025', 'Cruzeiro', 'Copa do Brasil'),
('14-12-2025', 'Cruzeiro', 'Copa do Brasil'),
('17-12-2025', 'Vasco da Gama', 'Copa do Brasil'),
('21-12-2025', 'Vasco da Gama', 'Copa do Brasil');



SELECT * FROM usuario
WHERE email = 'x'
AND senha = 'y';

