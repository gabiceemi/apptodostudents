import { getRepository } from 'typeorm';
import User from '../models/User';
import { hash } from 'bcryptjs';

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

      const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
      institution,
      avatar,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
