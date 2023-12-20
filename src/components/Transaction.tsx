import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import { ITransaction } from "../interfaces";

const Transaction = ({ text, id, amount = 0 }: ITransaction) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = amount < 0 ? "-" : "+";

  const handleDelete = () => (deleteTransaction ? deleteTransaction(id) : "");

  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      {text}{" "}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button className="delete-btn" onClick={handleDelete}>
        x
      </button>
    </li>
  );
};

export default Transaction;
