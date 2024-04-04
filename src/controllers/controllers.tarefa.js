function listar(req, res) {
    res.status(200).send('Listando as tarefas!');
    // acessar banco de dados
}

function inserir(req, res) {
    res.status(201).send('Inserir as tarefas!');
}

function editar(req, res) {
    res.status(200).send('Editar uma tarefa!');
}

function excluir(req, res) {
    res.status(200).send('Excluir uma tarefa!');
}

export default { listar, inserir, editar, excluir };