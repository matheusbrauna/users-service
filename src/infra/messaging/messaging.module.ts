import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';
import { UsersController } from './kafka/controllers/users.controller';
import { CreateUserUseCase } from 'src/@app/use-cases/create-user-use-case';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, CreateUserUseCase],
  controllers: [UsersController],
})
export class MessagingModule {}
