import { Router } from 'express';

import ProdutoControlador from './app/controllers/ProdutoControlador';
import CompraProdutoControlador from './app/controllers/CompraProdutoControlador';

const routes = new Router();

// Cadastro do produto
routes.get('/produto', ProdutoControlador.index);
routes.post('/produto', ProdutoControlador.store);
routes.delete('/produto/:id', ProdutoControlador.delete);

// Compra do produto
routes.get('/compra', CompraProdutoControlador.store);

export default routes;
