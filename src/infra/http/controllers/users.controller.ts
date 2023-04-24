import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CreateUserUseCase } from 'src/@app/use-cases/create-user-use-case';
import { DeleteUserUseCase } from 'src/@app/use-cases/delete-user-use-case';
import { CreateUserInput } from '../dtos/create-user-input';

@Controller('users')
export class UsersController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
  ) {}

  @Post()
  async create(@Body() body: CreateUserInput) {
    const { name, email, phone } = body;

    const { user } = await this.createUserUseCase.execute({
      name,
      email,
      phone,
    });

    return {
      user,
    };
  }

  @Delete(':userId/delete')
  async delete(@Param('userId') userId: string) {
    await this.deleteUserUseCase.execute({
      userId,
    });
  }
}
