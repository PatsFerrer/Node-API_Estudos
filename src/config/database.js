import sqlite3 from "sqlite3";

const SQLite3 = sqlite3.verbose();

// tenta instanciar uma nova conexao com esse banco 'bando.db', no modo leitura e gravação (READWRITE), se der algum erro.. chama a função.
const db = new SQLite3.Database('banco.db', SQLite3.OPEN_READWRITE, function(err){
    if(err){
        return console.log('Erro ao conectar com o banco: ', err.message);
    }
});

export { db };