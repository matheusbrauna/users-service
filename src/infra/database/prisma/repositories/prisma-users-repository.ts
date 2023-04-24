import { Injectable } from '@nestjs/common';
import { User } from 'src/@app/entities/user';
import { UsersRepository } from 'src/@app/repositories/users-repository';
import { PrismaService } from '../prisma.service';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    });
  }

  async delete(userId: string): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id: userId,
      },
    });
  }

 async findMany(): Promise<User[]> {
    const users = await this.prisma.user.findMany()

    return users.map(PrismaNotificationMapper.toDomain) 
  }
}
