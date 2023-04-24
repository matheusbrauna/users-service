import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserUseCase } from 'src/@app/use-cases/create-user-use-case';
import { DeleteUserUseCase } from 'src/@app/use-cases/delete-user-use-case';
import { CreateUserInput } from '../dtos/create-user-input';
import { FindManyUseCase } from 'src/@app/use-cases/find-many-users-use-case';
import { PrismaNotificationMapper } from 'src/infra/database/prisma/mappers/prisma-notification-mapper';

@Controller('users')
export class UsersController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
    private findManyUseCase: FindManyUseCase,
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

  @Get()
  async findMany() {
    const { users } = await this.findManyUseCase.execute();

    return users.map(PrismaNotificationMapper.toDomain);
  }
}
