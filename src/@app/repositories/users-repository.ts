import { User } from '../entities/user';

export abstract class UsersRepository {
  abstract create(user: User): Promise<void>;
  abstract delete(userId: string): Promise<void>;
  abstract findMany(): Promise<User[]>
}
