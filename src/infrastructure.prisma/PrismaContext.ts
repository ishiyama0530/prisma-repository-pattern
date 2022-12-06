import { Prisma } from "@prisma/client";
import { IRepositoryContext } from "../common/IRepositoryContext";

export class PrismaContext implements IRepositoryContext {
  constructor(public readonly prisma: Prisma.TransactionClient) {}
}
