import axios from "axios";
import React, { useState } from "react";
import { useAppDispatch } from "../redux/store";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";
import { getUserData, updateBalance } from "../redux/actions/user.action";

const FundAccount = ({ currentUser }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [newAmount, setnewAmount] = useState("");

  let email = currentUser.email;
  let publicKey = "pk_test_81338c74c32ab94adecbb258dc43be07f645286c";
  let name = currentUser.firstname;
  let amount = newAmount * 100;
  let balance = Number(currentUser.balance) + Number(newAmount);
  let date = new Date().toLocaleDateString();

  //
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone: "",
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      document.querySelector("button[data-bs-dismiss='modal']").click()
      alert("Your Account Has been Funded with" + newAmount);
      let newObject = {
        balance: balance,
        id: currentUser._id,
        date,
        type: true,
        amount: newAmount,
        description: "Personal Funding",
      };

      dispatch(updateBalance(newObject));

      dispatch(getUserData({ _id: localStorage.token }));

      // })()
      // axios.post("/user/updateBalance", newObject).then((result) => {
      //   console.log(result);
      // });
    },
    onClose: () => alert("Your transaction will not be recorded"),
  };
  return (
    <>
      <div
        className="modal fade"
        id="FundAccount"
        tabIndex="-1"
        aria-labelledby="FundAccountLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="FundAccountLabel">
                Fund Account
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                className="form-control"
                type="number"
                placeholder="Amount"
                onChange={(e) => {
                  setnewAmount(e.target.value);
                }}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Quit
              </button>
              <PaystackButton
                data-bs-dismiss="modal"
                className="btn btn-success"
                {...componentProps}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundAccount;
