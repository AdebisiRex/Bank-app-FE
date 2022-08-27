import React from "react";
import DashboardNav from "../DashboardNav";
import Navbar from "../Navbar";
import Transactions from "../Transactions";

const TransactionPage = () => {
  return (
    <>
      <Navbar />
      <div className="row">
        
          <DashboardNav />
        
        <div className="col-10">
          <Transactions />
        </div>
      </div>
    </>
  );
};

export default TransactionPage;
