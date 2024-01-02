import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import SignupPage from "./components/pages/SignupPage";
import SinginPage from "./components/pages/SinginPage";
import DashboardRoutes from "./components/pages/DashboardRoutes";
import ErrorPage from "./components/pages/ErrorPage";
import axios from "axios";
import { useState } from "react";
import { useAppDispatch } from "./redux/store";
import { loginUser } from "./redux/actions/user.action";

const App = () => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const [message, setmessage] = useState("");

  let thisToken = localStorage.token;

  const signin = async (thisUser) => {
    const { payload } = await dispatch(loginUser(thisUser));

    if (payload.response) {
      localStorage.token = payload.result._id;
      navigate("/dashboard");
    } else {
      setmessage(payload?.data.message ?? "there was an error");
    }
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
          element={
            thisToken === "" ? <Navigate to="/signup" /> : <DashboardRoutes />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
