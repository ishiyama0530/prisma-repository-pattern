import { IRepositoryContext } from "../../../common/IRepositoryContext";
import { UserEntity } from "./UserEntity";

export interface IUserRepository {
  create(model: UserEntity, ctx: IRepositoryContext): Promise<UserEntity>;
}
