import React, { useState, useEffect } from "react";
import WallerAdd from "./WallerAdd";
import axios from "axios";

import Wallet from "./Wallet";

const Wallets = () => {
  const [userWallets, setuserWallets] = useState("");
  const [message, setmessage] = useState("");


  const createWallet = (newWallet) => {
    
    console.log(newWallet);
    let endpoint = "http://localhost:2300/wallet/create";

    axios
      .post(endpoint, newWallet)
      .then((result) => {
        setmessage(result.data.message);
      })
      .catch((err) => {
        setmessage("There's been an unforseen error;" + err.message);
      });
  };

  let id=localStorage.token
  const getWallets = () => {
    let endpoint = "http://localhost:2300/user/getwallets";
    axios.post(endpoint,{uid:id}).then((result) => {
      setuserWallets(result.data);
      console.log(result.data)
    });
  };
  useEffect(()=>{
    getWallets()
  },[message])

  const deleteWallet = (id) => {
    // console.log(id)
    let uid = localStorage.token
    let EP = process.env.REACT_APP_EP;
    let endpointget = EP+"/user/deleter";
    let thisWallet = { wid: id, uid };
    axios.post(endpointget, thisWallet).then((result) => {
      console.log("result")
      setmessage(result.data.message);
    }).catch(()=>{
      console.log("what????")
    });
  };

  
  return (
    <>
      <div className="mb-3 p-3 border rounded-4">
        <h3>
          Wallets{" "}
          <i
            className="fa fa-plus-circle"
            aria-hidden="true"
            data-bs-toggle="modal"
            data-bs-target="#walletModal"
          ></i>
        </h3>
        <WallerAdd id={id} createWallet={createWallet} message={message}/>

        <div className="row g-3">
          {userWallets ? (
            userWallets.map((item, value) => (
              <Wallet
                walletName={item.w_name}
                targetAmount={item.t_amount}
                walletBalance={item.w_balance}
                targetDate={item.t_date}
                createDate={item.c_date}
                
                deleter={()=>deleteWallet(item._id)}
                walletID = {item._id}
              />
            ))
          ) : (
            <p>You have no wallets created</p>
          )}
        </div>
          
      </div>
    </>
  );
};

export default Wallets;
