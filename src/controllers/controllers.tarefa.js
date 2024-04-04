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
            res.status(201).send(result[0]);
        }
    })
}

function editar(req, res) {
    serviceTarefa.editar(req.params.id_tarefa, req.body, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result[0]);
        }
    })
}

function excluir(req, res) {
    serviceTarefa.excluir(req.params.id_tarefa, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result[0]);
        }
    })
}

export default { listar, inserir, editar, excluir };