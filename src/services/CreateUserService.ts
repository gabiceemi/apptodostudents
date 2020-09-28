import { getRepository } from 'typeorm';
import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
  institution: string;
  avatar: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    institution,
    avatar,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new Error('Email já está em uso');
    }

    const user = usersRepository.create({
      name,
      email,
      password,
      institution,
      avatar,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
