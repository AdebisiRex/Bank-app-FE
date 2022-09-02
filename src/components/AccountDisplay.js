import React from "react";

const AccountDisplay = () => {
  return (
    <>
      <div className="container border rounded-4 p-4 mb-3">
        <div className="row align-items-center">
          <div className="col-12 col-md-4">
            <div className="row mb-3">
              <div className="col-3  rounded-pill bg-info p-3">
                <h3 className="text-white text-center m-0">
                  <i className="fa fa-inbox" aria-hidden="true"></i>
                </h3>
              </div>
              <div className="col-9">
                <small className="text-seconary">Total Earning</small>
                <h4>$4,000.91</h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="row mb-3">
              <div className="col-3 rounded-pill bg-primary p-3">
                <h3 className="text-white text-center m-0">
                  <i className="fa fa-send-o" aria-hidden="true"></i>
                </h3>
              </div>
              <div className="col-9">
                <small className="text-seconary">Total Expenses</small>
                <h4>$2,780.25</h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="row ">
              <div className="col-3 rounded-pill bg-success text-center p-3">
                <h3 className="text-white   m-0">
                  <i className="fa fa-book" aria-hidden="true"></i>
                </h3>
              </div>
              <div className="col-9">
                <small className="text-seconary">Month's Budget</small>
                <h4>$1,419.75 </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDisplay;
