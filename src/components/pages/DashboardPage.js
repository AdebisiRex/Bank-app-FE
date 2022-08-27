import React from "react";
import DashboardNav from "../DashboardNav";
import Navbar from "../Navbar";

import Welcome from "../Welcome";
import AccountDisplay from "../AccountDisplay";
import Wallets from "../Wallets";
import AccountDetails from "../AccountDetails";
import Transactions from "../Transactions";
import OnlineTransaction from "../OnlineTransaction";

const DashboardPage = ({currentUser}) => {
    let {firstname, lastname, email, _id,username,balance, acc_no}=currentUser;
  return (
    <>
      <Navbar />
      <div className="row">
        <DashboardNav />
        <div className="col-12 col-md-8 p-3">
          <Welcome firstname={firstname}  />
          <div className="border rounded-3 p-3">
            <AccountDetails currentUser={currentUser} />
            <Wallets id={_id} />
            <AccountDisplay />
            <Transactions />
          </div>
        </div>
        <div className="col-3 p-3 d-none d-md-block ">
          <OnlineTransaction />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
