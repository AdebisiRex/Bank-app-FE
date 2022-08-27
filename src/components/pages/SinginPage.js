import React from "react";
import Navbar from "../Navbar";
import Signinform from "../Signinform";

const SinginPage = ({signin,message}) => {
  return (
    <>
      <Navbar />
      <Signinform signin={signin} message={message} />
    </>
  );
};

export default SinginPage;
