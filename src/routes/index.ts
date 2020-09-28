import { Router } from 'express';

import userRouter from './user.routes';

//import userController from '../controller/userController';

const routes = Router();

routes.use('/users',userRouter);

//Rotas de Usuário

//Lista todos os Usuários
//routes.get('/users',userController.index);
//Cria um Usuário
//routes.post('/users',userController.create);
export default routes;
