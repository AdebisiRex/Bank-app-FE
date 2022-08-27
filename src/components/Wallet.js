import React from "react";
import "../components/style/Header.css";
import chip from "../resources/chippng.png";
import visa from "../resources/visa.png";

const Wallet = () => {
  return (
    <>
      <div className="col-12 transbg col-md-6 col-xl-4 transbg shadow-sm  rounded-4  pt-3 px-3">
        <div className="row align-items-center mb-3">
          <div className="col-8">
            <p className="m-0">Shopping Card</p>
          </div>
          <div className="col-4">
            <img src={chip} width={70} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <p className="m-0">Target:</p>
          </div>
          <div className="col-9">
            <h4 className="text-end text-monospace">**** **** 3498</h4>
          </div>
          <div className="col-3">
            <p className="m-0">Balance:</p>
          </div>
          <div className="col-9">
            <p className="text-end text-monospace">**** **** 3498</p>
          </div>
        </div>
        <div className="row mt-3 rounded-4 py-3 align-items-center bg-primary  bg-gradient">
          <div className="col-8">
            <p className="m-0">Target Date: 08/26</p>
          </div>
          <div className="col-4">
            {" "}
            <img src={visa} alt="" height={16} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
