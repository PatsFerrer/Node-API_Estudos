import { Router } from "express";
import controllersTarefa from "./controllers/controllers.tarefa.js";

const routes = Router();

routes.get('/tarefas', controllersTarefa.listar);

routes.post('/tarefas', controllersTarefa.inserir);

routes.put('/tarefas', controllersTarefa.editar);

routes.delete('/tarefas', controllersTarefa.excluir);

export default routes;