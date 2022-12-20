import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <h3>History</h3>

      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {transactions
        .filter((el) => {
          if (searchTerm === "") {
            return el.text;
          } else if (el.text.toLowerCase().includes(searchTerm.toLowerCase())) {
            return el.text;
          }
        })
        .map((item, i) => (
          <ul className="list" key={i}>
            <Transaction {...item} />
          </ul>
        ))}
    </>
  );
};

export default TransactionList;
