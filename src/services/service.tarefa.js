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

function editar(id_tarefa, body, functionCallback) {
    db.all('UPDATE tarefas SET descricao=?, concluido=? WHERE id_tarefa=? returning id_tarefa', [body.descricao, body.concluido, id_tarefa], function (err, rows) {
        functionCallback(err, rows);
    });
}

function excluir(id_tarefa, functionCallback) {
    db.all('DELETE FROM tarefas WHERE id_tarefa=? returning id_tarefa', [id_tarefa], function (err, rows) {
        functionCallback(err, rows);
    });
}

export default { listar, inserir, editar, excluir }