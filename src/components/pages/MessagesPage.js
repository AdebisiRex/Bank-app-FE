import React from "react";
import DashboardNav from "../DashboardNav";
import Messages from "../Messages";
import Navbar from "../Navbar";

const MessagesPage = () => {
  return (
    <div>
      <>
        
        <div className="row">
          <DashboardNav />

          <div className="col-10">
            <Messages/>
          </div>
        </div>
      </>
    </div>
  );
};

export default MessagesPage;
