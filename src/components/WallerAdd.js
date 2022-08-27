import React, { useState } from "react";

const WallerAdd = ({id}) => {
  const [w_name, setw_name] = useState("");
  const [t_amount, sett_amount] = useState("");
  const [t_date, sett_date] = useState("");

  const createWallet=()=>{
    let today = new Date()
    let c_date = today.getDate()
    let w_balance = 0;
    let uid= id;
    let newWallet={w_name, t_amount, t_date, w_balance,c_date, uid}

    console.log(newWallet)
  }

  return (
    <>
      <div
        className="modal fade"
        id="walletModal"
        tabindex="-1"
        aria-labelledby="walletModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="walletModalLabel">
                Create New Wallet
              </h5>
            </div>
            <div className="modal-body">
              <input
                className="form-control mb-3 border-primary"
                type="text"
                name="walletname"
                placeholder="Wallet Name"
                onChange={(e)=>setw_name(e.target.value)}
              />
              <input
                className="form-control mb-3 border-primary"
                type="number"
                name="t_amount"
                placeholder="Target"
                onChange={(e)=>sett_amount(e.target.value)}
              />
              <label htmlFor="">
                Target Date:
                <input
                  className="form-control mb-3 border-primary"
                  type="date"
                  name="t_date"
                  placeholder="Target Date"
                  onChange={(e)=>sett_date(e.target.value)}
                />
              </label>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Quit
              </button>
              <button onClick={createWallet} type="button" className="btn btn-primary">
                Create Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WallerAdd;
