
import {getRepository} from 'typeorm';
import User from '../models/User';

interface Request {
    name: string;
    email: string;
    password: string;
    institution : string;
    avatar: string; 
    created_at: string;
    updated_at: string; 
}

class CreateUserService{
    
    public async execute({name, email, password, institution, avatar, created_at, updated_at}: Request): Promise<User>{

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
            created_at,
            updated_at,
        });

        await userRepository.save(user);

        return user;
    }
}

export default CreateUserService;