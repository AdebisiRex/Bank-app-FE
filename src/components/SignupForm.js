import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { createAccount } from "../redux/actions/user.action";

const SignupForm = () => {
  const dispatch = useAppDispatch();
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [balance, setbalance] = useState(0);
  const [message, setmessage] = useState("");
  let navigate = useNavigate();

  const signup = async () => {
    let acc_no = Number("11" + Math.floor(Math.random() * 10e7));
    let newAccount = {
      firstname,
      lastname,
      username,
      email,
      password,
      acc_no,
      balance: 0,
    };

    const { payload } = await dispatch(createAccount(newAccount));
    if (payload.response) {
      navigate("/signin");
    }
  };

  return (
    <>
      <div className="container`-fluid">
        <div className="row vh-100 align-items-center">
          <div className="d-none d-md-block col-md-5 h-100 signupform border">
            {/* <h1 className=""></h1> */}
          </div>
          <div className="col-7">
            <h1 className="text-primary fw-bolder text-center mb-3">
              Welcome, to freedom!!!
            </h1>
            <h2 className="text-center text-secondary">Sign up</h2>
            <div className="col-9 mx-auto">
              {message !== "" ? (
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              ) : (
                ""
              )}
              <input
                type="text"
                name="firstname"
                className="mb-3 form-control"
                placeholder="First Name"
                onChange={(e) => setfirstname(e.target.value)}
              />
              <input
                type="text"
                name="lastname"
                className="mb-3 form-control"
                placeholder="Last Name"
                onChange={(e) => setlastname(e.target.value)}
              />
              <input
                type="text"
                name="username"
                className="mb-3 form-control"
                placeholder="Username"
                onChange={(e) => setusername(e.target.value)}
              />
              <input
                type="email"
                name="email"
                className="mb-3 form-control"
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                className="mb-3 form-control"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
              <button
                onClick={() => signup()}
                className="btn btn-lg btn-secondary form-control"
              >
                {" "}
                Signup{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
