import { Injectable } from '@nestjs/common';
import { User } from '../entities/user';
import { UsersRepository } from '../repositories/users-repository';

interface CreateUserRequest {
  name: string;
  email: string;
  phone?: string;
}

interface CreateUserResponse {
  user: User;
}

@Injectable()
export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { name, email, phone } = request;

    const user = new User({
      name,
      email,
      phone,
    });

    await this.usersRepository.create(user);

    return {
      user,
    };
  }
}
