import { PrismaClient } from "@prisma/client";
import { MockTransaction } from "./infrastructure.mock/MockTransaction";
import { MockUserRepository } from "./infrastructure.mock/MockUserRepository";
import { PrismaTransaction } from "./infrastructure.prisma/PrismaTransaction";
import { PrismaUserRepository } from "./infrastructure.prisma/PrismaUserRepository";
import { ITransaction } from "./common/ITransaction";
import { CreateUserInteractor } from "./packages/user/applications/CreateUserInteractor";
import { IUserRepository } from "./packages/user/domains/IUserRepository";

const prisma = new PrismaClient();

const transaction: ITransaction = new MockTransaction();
const userRepository: IUserRepository = new MockUserRepository();

// const transaction: ITransaction = new PrismaTransaction();
// const userRepository: IUserRepository = new PrismaUserRepository();

async function main() {
  const interactor = new CreateUserInteractor(transaction, userRepository);
  interactor.handle();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
