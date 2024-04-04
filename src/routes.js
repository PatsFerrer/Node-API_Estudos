import { Router } from "express";
import controllersTarefa from "./controllers/controllers.tarefa.js";

const routes = Router();

routes.get('/tarefas', controllersTarefa.listar);

routes.post('/tarefas', controllersTarefa.inserir);

routes.put('/tarefas/:id_tarefa', controllersTarefa.editar);

routes.delete('/tarefas/:id_tarefa', controllersTarefa.excluir);

export default routes;