import { db } from "../config/database.js";
// conexão com o banco

function listar(functionCallback) {
    let sql = "SELECT * FROM tarefas";

    db.all(sql, [], function (err, rows) {
        functionCallback(err, rows);
    });
}

function inserir(body, functionCallback) {
    db.all('INSERT INTO tarefas(descricao, concluido) VALUES(?, ?) returning id_tarefa', [body.descricao, body.concluido], function (err, rows) {
        functionCallback(err, rows);
    });
}

function editar() {

}

function excluir() {

}

export default { listar, inserir, editar, excluir }