import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateUserUseCase } from 'src/@app/use-cases/create-user-use-case';

@Controller()
export class UsersController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  @EventPattern('create.create-users')
  async handleCreateUser(@Payload() { name, email, phone }: any) {
    await this.createUserUseCase.execute({
      name,
      email,
      phone,
    });
  }
}
