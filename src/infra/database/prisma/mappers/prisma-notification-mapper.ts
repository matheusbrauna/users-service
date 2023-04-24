import { User } from "src/@app/entities/user";
import { User as RawUser } from "@prisma/client";

export class PrismaNotificationMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    };
  }

  static toDomain(raw: RawUser): User {
    return new User({
      name: raw.name,
      email: raw.email,
      phone: raw.phone,
    }, raw.id);
  }
}