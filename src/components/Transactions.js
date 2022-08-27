import React from "react";
import TransactionEach from "./TransactionEach";

const Transactions = () => {
  return (
    <>
      <div className="mb-3 border rounded-4 p-3">
        <h3 className="mb-3">
          Transactions<i class="fa fa-info-circle" aria-hidden="true"></i>
        </h3>

        <button className="btn btn-outline-secondary rounded-5 px-4 me-3">All</button>
        <button className="btn btn-outline-secondary rounded-5 px-4 me-3">Credits</button>
        <button className="btn btn-outline-secondary rounded-5 px-4">Debits</button>

        <div>
            <TransactionEach/>
            <TransactionEach/>
            <TransactionEach/>
            <TransactionEach/>
            <TransactionEach/>
            <TransactionEach/>
            <TransactionEach/>
            <TransactionEach/>
            <TransactionEach/>
            <TransactionEach/>
            <TransactionEach/>
            <TransactionEach/>
            <TransactionEach/>
            <TransactionEach/>
            <TransactionEach/>
        </div>
      </div>
    </>
  );
};

export default Transactions;
