import React from "react";
import { Routes, Route } from "react-router-dom";

import DashboardPage from "./DashboardPage";
import MessagesPage from "./MessagesPage";
import TransactionPage from "./TransactionPage";
import UsereditPage from "./UsereditPage";


const DashboardRoutes = ({currentUser}) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage currentUser={currentUser} />} />
        <Route path="/transactions" element={<TransactionPage/>} />
        <Route path="/messages" element={<MessagesPage/>} />
        <Route path="/user" element={<UsereditPage/>} />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
