import { Router } from 'express';

import CreateUserService from '../service/CreateUserService';

const userRouter = Router();

userRouter.post('/', async (request, response)=>{
      try {

        const {name, email, password, institution, avatar} = request.body;
              
        const createUser = new CreateUserService();

        const user = await createUser.execute({
            name, 
            email, 
            password, 
            institution, 
            avatar,             
          
        });

          return response.json(user);
          
      } catch (err) {
          return response.status(400).json({error : err.message});
      }
});

export default userRouter;
