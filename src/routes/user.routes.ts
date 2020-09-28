import {  Router } from 'express';

import CreateUserService from '../service/CreateUserService';

const userRouter = Router();


userRouter.post('/', async (request, response)=>{
      try {
              const { name } = request.body;

              console.log(name);

          return response.json();
          
      } catch (err) {
          return response.status(400).json({error : err.message});
      }
});

export default userRouter;
