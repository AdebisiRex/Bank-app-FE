import React from "react";
import WallerAdd from "./WallerAdd";

import Wallet from "./Wallet";



const Wallets = () => {
  return (
    <>
      <div className="mb-3 p-3 border rounded-4">
        <h3>
          Wallets <i className="fa fa-plus-circle" aria-hidden="true" data-bs-toggle="modal" data-bs-target="#walletModal"></i>
        </h3>
        <WallerAdd/>

        <div className="row g-3">
          <Wallet/>
          
          
        </div>
      </div>
    </>
  );
};

export default Wallets;
