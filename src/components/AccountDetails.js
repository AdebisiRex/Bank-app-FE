import React from "react";

const AccountDetails = ({currentUser}) => {
  let {firstname, lastname, email, _id,username,balance, acc_no}=currentUser;
  return (
    <>
      <div className="mb-3 p-3">
        <h3>
          Account Details<i class="fa fa-info-circle" aria-hidden="true"></i>
        </h3>
        <div className="d-md-flex d-block ">
            <div className="col-12 rounded-3 p-3 bg-light  col-md-6 ">
                <p className="text-secondary m-0">Your balance</p>
                <h3>${balance}</h3>
                <p className="m-0">3 CARDS</p>
            </div>
            
            <div className="col-12 p-3 bg-success bg-gradient col-md-6 rounded-3">
            <p className="text-white m-0">Account No:</p>
            <h3 className="font-monospace text-white">{acc_no}</h3>
               
            </div>


        </div>
      </div>
    </>
  );
};

export default AccountDetails;
