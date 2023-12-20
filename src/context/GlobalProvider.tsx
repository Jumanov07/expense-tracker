import { ReactNode, createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";
import { IState, ITransaction } from "../interfaces";

const initialState: IState = {
  transactions: [],
};

const GlobalContext = createContext(initialState);

interface Props {
  children: ReactNode;
}

const GlobalProvider = ({ children }: Props) => {
  const [{ transactions }, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id: number) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: { id },
    });
  };

  const addTransaction = (transaction: ITransaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
