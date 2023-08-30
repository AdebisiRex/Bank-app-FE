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
  console.log(process.env.port)
  let navigate = useNavigate();
  
  const [message, setmessage] = useState("");
  
  let thisToken = localStorage.token;

  const signin = (thisUser) => {
    let EP = process.env.REACT_APP_EP;
    // let endpoint = `https://bank-r.herokuapp.com/user/signin`;

    console.log(thisUser);

    axios
      .post("/user/signin", thisUser)
      .then((result) => {
        if (result.data.response) {
          localStorage.token = result.data.result._id;
          // settoken(()=>localStorage.token)

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
          element={thisToken===""?<Navigate to="/signup"/>:<DashboardRoutes/>}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
