import React, { useEffect  } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import NavbarDash from "../NavbarDash";

import DashboardPage from "./DashboardPage";
import MessagesPage from "./MessagesPage";
import TransactionPage from "./TransactionPage";
import UsereditPage from "./UsereditPage";
import {
  getUserData,
  getUserTransactions,
} from "../../redux/actions/user.action";

const DashboardRoutes = () => {
  const dispatch = useAppDispatch();
  const token = localStorage.token;
  const { user, transactions } = useAppSelector((state) => state.user);

  useEffect(() => {
    let newObject = { _id: token };

    dispatch(getUserData(newObject));
    dispatch(getUserTransactions(newObject));
    console.log(transactions);
  }, []);
  return (
    <>
      <NavbarDash currentUser={user} />
      <Routes>
        <Route
          path="/"
          element={
            <DashboardPage currentUser={user} transactions={transactions} />
          }
        />
        <Route
          path="/transactions"
          element={<TransactionPage transactions={transactions} />}
        />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/user" element={<UsereditPage />} />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
