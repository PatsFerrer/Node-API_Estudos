import { Router } from "express";

const routes = Router();

routes.get('/tarefas', function (req, res) {
    res.status(200).send('Listando as tarefas!');
});

routes.post('/tarefas', function (req, res) {
    res.status(201).send('Inserir as tarefas!');
});

routes.put('/tarefas', function (req, res) {
    res.status(200).send('Editar uma tarefa!');
});

routes.delete('/tarefas', function (req, res) {
    res.status(200).send('Excluir uma tarefa!');
});

export default routes;