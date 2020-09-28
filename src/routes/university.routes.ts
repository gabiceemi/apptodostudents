import { Router } from 'express';
import { getRepository } from 'typeorm';
import University from '../models/University';
import Uni from '../models/University';

const universityRouter = Router();


universityRouter.post('/',  async (request, response) => {
  

    
    try {
        const repo = getRepository(University);
        console.log('aqui',request.body);
        const res = await repo.save(request.body);
        console.log(request.body);
        return response.status(201).json(res);
        console.log('aqui4');
    } catch (err) {
        console.log('err.message', err.message);
    }
});


universityRouter.get('/',  async (request, response) => {
    response.json(getRepository(University).find());
    
});

export default universityRouter;
