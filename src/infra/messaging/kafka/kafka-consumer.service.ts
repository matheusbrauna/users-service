import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'users',
        brokers: ['vital-hermit-9885-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'dml0YWwtaGVybWl0LTk4ODUkpzWW6kcuJEuHgTaTh4rqKRuZLjCVFVqAKcwzEiM',
          password: '0fed8f578c4547679803e5d9621f160a',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
