import { IAction, IState, ITransaction } from "../interfaces";

export const AppReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: ITransaction) => transaction.id !== action.payload.id
        ),
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    default:
      return state;
  }
};
