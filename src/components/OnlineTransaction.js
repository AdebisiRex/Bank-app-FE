import React from "react";
import Messages from "./Messages";
import OnlineCard from "./OnlineCard";

const OnlineTransaction = () => {
  return (
    <>
      <div className="p-4 border rounded-4">
        <h4>Details Card</h4>

        <OnlineCard />

        <div className="my-3">
          <small>CARD NUMBER</small>
          <p className="m-0 fw-bold font-monospace">123456789123</p>
        </div>
        <div className="row mb-5">
          <div className="col-6 border-end">
            <small>EXPIRY DATE</small>
            <p className="m-0 fw-bold font-monospace">05/22</p>
          </div>
          <div className="col-3 border-end">
            <small>CVV</small>
            <p className="m-0 fw-bold font-monospace">123</p>
          </div>
          <div className="col-3">
            <small>LEVEL</small>
            <p className="m-0 fw-bold font-monospace">2</p>
          </div>
        </div>
      </div>
      <Messages/>
    </>
  );
};

export default OnlineTransaction;
