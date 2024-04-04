import serviceTarefa from "../services/service.tarefa.js";

function listar(req, res) {
    serviceTarefa.listar(function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    })
}

function inserir(req, res) {
    serviceTarefa.inserir(req.body, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result[0]);
        }
    })
}

function editar(req, res) {
    res.status(200).send('Editar uma tarefa!');
}

function excluir(req, res) {
    res.status(200).send('Excluir uma tarefa!');
}

export default { listar, inserir, editar, excluir };