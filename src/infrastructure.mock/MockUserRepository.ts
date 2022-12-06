import { IRepositoryContext } from "../common/IRepositoryContext";
import { IUserRepository } from "../packages/user/domains/IUserRepository";
import { UserEntity } from "../packages/user/domains/UserEntity";

export class MockUserRepository implements IUserRepository {
  create(model: UserEntity, ctx: IRepositoryContext): Promise<UserEntity> {
    console.log(`created: ${JSON.stringify(model)}`);
    return Promise.resolve(model);
  }
}
