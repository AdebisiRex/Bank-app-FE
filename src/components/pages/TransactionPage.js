import React from "react";
import DashboardNav from "../DashboardNav";

import Transactions from "../Transactions";

const TransactionPage = ({transactions}) => {
  
  return (
    <>
      
      <div className="row">
        
          <DashboardNav />
        
        <div className="col-10">
          { }
          <Transactions transactions={transactions} />
        </div>
      </div>
    </>
  );
};

export default TransactionPage;
