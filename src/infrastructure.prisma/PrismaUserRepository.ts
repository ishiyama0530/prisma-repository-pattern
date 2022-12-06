import { IUserRepository } from "../packages/user/domains/IUserRepository";
import { UserEntity } from "../packages/user/domains/UserEntity";
import { PrismaContext } from "./PrismaContext";

export class PrismaUserRepository implements IUserRepository {
  create(model: UserEntity, ctx: PrismaContext): Promise<UserEntity> {
    return ctx.prisma.user.create({
      data: {
        email: model.email,
      },
    });
  }
}
