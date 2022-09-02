import React, { useState } from "react";
import axios from "axios";

const Transfers = ({ currentUser }) => {
  const [accountNo, setaccountNo] = useState("");
  const [amount, setamount] = useState("");
  const [descr, setdescr] = useState("");
  const [message, setmessage] = useState("");
  let date = new Date().toLocaleDateString();
  let id = localStorage.token;
  let type = false;

  const makeTransfer = () => {
    let EP = process.env.REACT_APP_EP;
    let endpoint = EP + "/user/transfer";
    if (descr === "") {
      setmessage("Check input fields");
    } else {
      if (amount > currentUser.balance) {
        setmessage("You do not enough funds to make this transfer");
      } else {
        let balance = Number(currentUser.balance) - Number(amount);
        let newTransfer = { accountNo, descr, date, id, type, amount, balance };
        axios
          .post(endpoint, newTransfer)
          .then((result) => {
            console.log({ result, rex: "y'all tripping" });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="transferModal"
        tabIndex="-1"
        aria-labelledby="transferModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="transferModalLabel">
                Send Money
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {message !== "" ? (
                <div className="alert alert-primary ">{message}</div>
              ) : (
                ""
              )}
              <input
                type="number"
                placeholder="Amount"
                className="form-control mb-3"
                onChange={(e) => setamount(e.target.value)}
              />
              <input
                type="number"
                placeholder="Account No"
                className="form-control mb-3"
                onChange={(e) => setaccountNo(e.target.value)}
              />
              <input
                type="text"
                placeholder="Description"
                className="form-control mb-3"
                onChange={(e) => setdescr(e.target.value)}
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
              <button onClick={makeTransfer} className="btn btn-success">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transfers;
