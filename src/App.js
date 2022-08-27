import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import SignupPage from "./components/pages/SignupPage";
import SinginPage from "./components/pages/SinginPage";

import DashboardRoutes from "./components/pages/DashboardRoutes";
import ErrorPage from "./components/pages/ErrorPage";
import axios from "axios";
import { useState } from "react";

const App = () => {
  let navigate = useNavigate();
  const [currentUser, setcurrentUser] = useState("");
  const [message, setmessage] = useState("");
  const signin = (thisUser) => {
    let endpoint = "http://localhost:2300/user/signin";

    console.log(thisUser);

    axios
      .post(endpoint, thisUser)
      .then((result) => {
        if (result.data.response) {
          setcurrentUser(result.data.result);
          navigate("/dashboard");
        } else {
          setmessage(result.data.message);
        }
      })
      .catch((err) => {
        setmessage("Please attend to error:" + err.message);
      });
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/signin"
          element={<SinginPage signin={signin} message={message} />}
        />
        <Route
          path="/dashboard/*"
          element={<DashboardRoutes currentUser={currentUser} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
