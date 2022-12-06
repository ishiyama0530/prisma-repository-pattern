import { PrismaClient } from "@prisma/client";
import { IRepositoryContext } from "../common/IRepositoryContext";
import { ITransaction } from "../common/ITransaction";
import { PrismaContext } from "./PrismaContext";

export class PrismaTransaction implements ITransaction {
  $on<TResult>(
    fn: (ctx: IRepositoryContext) => Promise<TResult>
  ): Promise<TResult> {
    const prisma = new PrismaClient();
    return prisma.$transaction((tx) => fn(new PrismaContext(tx)));
  }
}
