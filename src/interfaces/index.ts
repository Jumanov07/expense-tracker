interface ITransaction {
  id: number;
  text?: string;
  amount?: number;
}

interface IState {
  transactions: ITransaction[];
  deleteTransaction?: (id: number) => void;
  addTransaction?: (transaction: ITransaction) => void;
}

interface IAction {
  type: string;
  payload: ITransaction;
}

export type { ITransaction, IState, IAction };
