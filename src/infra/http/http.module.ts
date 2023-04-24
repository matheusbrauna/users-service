import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsersController } from './controllers/users.controller';
import { CreateUserUseCase } from 'src/@app/use-cases/create-user-use-case';
import { DeleteUserUseCase } from 'src/@app/use-cases/delete-user-use-case';
import { FindManyUseCase } from 'src/@app/use-cases/find-many-users-use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [CreateUserUseCase, DeleteUserUseCase, FindManyUseCase],
})
export class HttpModule {}
