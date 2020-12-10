import { Router } from 'express';

import ProdutoControlador from './app/controllers/ProdutoControlador';

const routes = new Router();

routes.get('/produto', ProdutoControlador.index);
routes.post('/produto', ProdutoControlador.store);
routes.put('/produto', ProdutoControlador.update);

export default routes;
