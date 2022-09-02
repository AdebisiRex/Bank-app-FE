import axios from "axios";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

const FundAccount = ({currentUser}) => {
    const [newAmount, setnewAmount] = useState("");

    let email=currentUser.email;
    let publicKey = 'pk_test_81338c74c32ab94adecbb258dc43be07f645286c';
    let name = currentUser.firstname;
    let amount =  (newAmount*100);
    let balance = Number(currentUser.balance) + Number(newAmount);
    let date = new Date().toLocaleDateString();
    
    

   
    // 
    const componentProps = {
        email,
        amount,
        metadata: {
          name,
          phone:"",
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>{
          alert("Your Account Has been Funded with"+newAmount);
          let endpoint = "http://localhost:2300/user/updateBalance";
          let newObject = {balance: balance, id:currentUser._id,date,type:true, amount:newAmount, description:"Personal Funding"}
          axios.post(endpoint, newObject).then((result)=>{
            console.log(result)

          })
        },
        onClose: () => alert("Wait! You need this oil, don't go!!!!"),
      }
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
                <input className="form-control" type="number" placeholder="Amount"
                onChange={(e)=>{setnewAmount(e.target.value)}} />

            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Quit
              </button>
              <PaystackButton className="btn btn-success" {...componentProps} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundAccount;
