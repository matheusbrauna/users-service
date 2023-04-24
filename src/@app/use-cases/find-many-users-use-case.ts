import { Injectable } from '@nestjs/common';
import { User } from '../entities/user';
import { UsersRepository } from '../repositories/users-repository';
import { PrismaNotificationMapper } from 'src/infra/database/prisma/mappers/prisma-notification-mapper';



interface FindManyResponse {
  users: User[];
}

@Injectable()
export class FindManyUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<FindManyResponse> {
   const users = await this.usersRepository.findMany();

    return {
      users
    }
  }
}
