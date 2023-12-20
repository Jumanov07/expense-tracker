import { ChangeEvent, ReactElement, useContext, useState } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalProvider";
import { ITransaction } from "../interfaces";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchTerm = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const filteredTransactions: ITransaction[] = transactions.filter(
    (transaction: ITransaction) => {
      return (
        searchTerm === "" ||
        (transaction.text &&
          transaction.text.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
  );

  const transactionComponents: ReactElement[] = filteredTransactions.map(
    (transaction: ITransaction) => (
      <Transaction key={transaction.id} {...transaction} />
    )
  );

  return (
    <>
      <h3>History</h3>

      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={handleSearchTerm}
      />

      <ul className="list">{transactionComponents}</ul>
    </>
  );
};

export default TransactionList;
