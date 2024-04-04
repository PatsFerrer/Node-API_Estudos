// conexão com o banco

function listar(functionCallback) {
    // simulando um banco p testar no postman
    functionCallback(null, [
        { descricao: 'Fazer compras', concluido: 'N' },
        { descricao: 'Fazer exercícios', concluido: 'S' },
        { descricao: 'enviar email', concluido: 'N' },
    ]);
}

function inserir() {

}

function editar() {

}

function excluir() {

}

export default { listar, inserir, editar, excluir }