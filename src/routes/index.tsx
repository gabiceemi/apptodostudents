import { Router } from 'express';

import usersRouter from './users.routes';

const routes = Router();

routes.use('/users', usersRouter);

// Rotas de Usuário

// Lista todos os Usuários
// routes.get('/users',userController.index);
// Cria um Usuário
// routes.post('/users',userController.create);

export default routes;
