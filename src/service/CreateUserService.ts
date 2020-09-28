
import {getRepository} from 'typeorm';
import User from '../models/User';

interface Request {
    name: string;
    email: string;
    password: string;
    institution : string;
    avatar: string; 
    
}

class CreateUserService{
    
    public async execute({name, email, password, institution, avatar}: Request): Promise<User>{

        const userRepository = getRepository(User);

        const checkUserExists = await userRepository.findOne({
            where:{email},
        });

        if(checkUserExists){
            throw new Error('Email já está em uso')
        }

        const user = userRepository.create({
            name,
            email,
            password,
            institution ,
            avatar,
            
        });

        await userRepository.save(user);

        return user;
    }
}

export default CreateUserService;