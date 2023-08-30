import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavbarDash from "../NavbarDash";

import DashboardPage from "./DashboardPage";
import MessagesPage from "./MessagesPage";
import TransactionPage from "./TransactionPage";
import UsereditPage from "./UsereditPage";

const DashboardRoutes = () => {
  const token = localStorage.token;
  const [message, setmessage] = useState("")
  const [transactions, settransactions] = useState("")

  const [currentUser, setcurrentUser] = useState("");
  useEffect(() => {
    let newObject = { _id: token };
    let EP = process.env.REACT_APP_EP
    let endpoint = "https://bank-r.herokuapp.com/user/dashboard"
    axios.post("/user/dashboard", newObject).then((result) => {
      setcurrentUser(result.data[0]);
      // console.log(result)
      // setmessage(result.data[0].message)
    });
    let transactionpoint = "https://bank-r.herokuapp.com/user/getTransactions"
    axios.post("/user/getTransactions", newObject).then((result) => {
      console.log(result.data);
      let arr = result.data;
      let new_arr = arr.reverse();
      settransactions(new_arr);
    });
  }, []);
  return (
    <>
    <NavbarDash currentUser={currentUser}/>
      <Routes>
        <Route path="/" element={<DashboardPage currentUser={currentUser} transactions={transactions} />} />
        <Route path="/transactions" element={<TransactionPage transactions={transactions} />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/user" element={<UsereditPage />} />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
