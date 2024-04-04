import { Router } from "express";

const routes = Router();

routes.get('/teste', function(req, res){
    res.status(200).send('Teste OK!');
});

export default routes;