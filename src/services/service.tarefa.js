import { db } from "../config/database.js";
// conexão com o banco

function listar(functionCallback) {
    let sql = "SELECT * FROM tarefas";

    db.all(sql, [], function (err, rows) {
        functionCallback(err, rows);
    });
}

function inserir() {

}

function editar() {

}

function excluir() {

}

export default { listar, inserir, editar, excluir }