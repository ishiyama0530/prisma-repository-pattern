import { IRepositoryContext } from "./IRepositoryContext";

export interface ITransaction {
  $on<TResult>(
    fn: (ctx: IRepositoryContext) => Promise<TResult>
  ): Promise<TResult>;
}
