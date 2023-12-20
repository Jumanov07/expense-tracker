import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import { ITransaction } from "../interfaces";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTransaction: ITransaction = {
      id: Math.floor(Math.random() * 10000000000000),
      text,
      amount: +amount,
    };

    if (addTransaction && text.trim().length && amount.trim().length) {
      addTransaction(newTransaction);
    } else {
      alert("Fill in all fields!");
    }

    setText("");
    setAmount("");
  };

  const handleText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleAmount = (e: ChangeEvent<HTMLInputElement>) =>
    setAmount(e.target.value);

  return (
    <>
      <h3>Add new transaction</h3>

      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={text}
            onChange={handleText}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={handleAmount}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
