import { ITransaction } from "../../../common/ITransaction";
import { IUserRepository } from "../domains/IUserRepository";
import { UserEntity } from "../domains/UserEntity";

export class CreateUserInteractor {
  constructor(
    private readonly transaction: ITransaction,
    private readonly userRepository: IUserRepository
  ) {}
  handle(): void {
    this.transaction.$on(async (ctx) => {
      const user = new UserEntity("xxx@xxx.com");
      await this.userRepository.create(user, ctx);
    });
  }
}
