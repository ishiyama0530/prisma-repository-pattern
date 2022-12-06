import { IRepositoryContext } from "../common/IRepositoryContext";
import { ITransaction } from "../common/ITransaction";

export class MockTransaction implements ITransaction {
  $on<TResult>(
    fn: (ctx: IRepositoryContext) => Promise<TResult>
  ): Promise<TResult> {
    try {
      return fn({});
    } catch {
    throw new Error("Transaction is not implement.")}
  }
}
