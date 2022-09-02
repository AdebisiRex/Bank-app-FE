import axios from "axios";
import React, { useState } from "react";
import "../components/style/Header.css";
import chip from "../resources/chippng.png";
import visa from "../resources/visa.png";

const Wallet = ({
  walletName,
  targetAmount,
  walletBalance,
  createDate,
  targetDate,
  deleter,
  walletID,
}) => {
  const [message, setmessage] = useState("")
  

  const [amount, setamount] = useState("")
  let id = localStorage.token;
  const fundWallets = () => {
    let EP = process.env.REACT_APP_EP
    let endpoint = EP+"/wallet/fundWallet"
    let fundObj = { walletID, id, amount };
    axios.post(endpoint, fundObj).then((result)=>{
      console.log(result)
      setmessage(result.data.message)
    })
  };
  return (
    <>
      <div className="col-12  col-md-6 col-xl-4">
        <div className="shadow-sm transbg rounded-4  pt-3 px-3">
          <div className="row align-items-center mb-3">
            <div className="col-8">
              <p className="fw-bolder m-0">{walletName}</p>
            </div>
            <div className="col-4">
              <img src={chip} width={60} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <p className="m-0">Target: {targetAmount}</p>
            </div>
            <div className="col-9">
              <h4 className="text-end text-monospace">${walletBalance} </h4>
            </div>
            <div className="col-3">
              <p className="m-0">Creation Date:</p>
            </div>
            <div className="col-9">
              <p className="text-end text-monospace">{createDate}</p>
            </div>
          </div>
          <div className="row my-3 rounded-4 py-3 align-items-center bg-primary  bg-gradient">
            <div className="col-8">
              <p className="m-0">Target Date: {targetDate}</p>
            </div>
            <div className="col-4">
              {" "}
              <img src={visa} alt="" height={13} />
            </div>
          </div>
        </div>
        <div className="">
          <button className="btn btn-outline-primary" onClick={deleter}>
            Delete
          </button>
          <button
            className="btn ms-1 btn-outline-success"
            data-bs-toggle="modal"
            data-bs-target="#fundWallet"
          >
            Fund
          </button>
        </div>
      </div>

      <div
        class="modal fade"
        id="fundWallet"
        tabindex="-1"
        aria-labelledby="fundWalletLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="fundWalletLabel">
                Fund Wallet
              </h5>
              
            </div>
            <div class="modal-body">
              {message? <div className="alert alert-success">{message}</div>:""}
              <input type="text" className="mb-3 form-control" placeholder="Amount" onChange={(e)=>setamount(e.target.value)} />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" onClick={fundWallets}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
