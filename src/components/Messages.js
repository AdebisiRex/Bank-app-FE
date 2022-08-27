import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <>
      <div className="p-3 border rounded-5 mt-4">
        <h4>
          Messages <i class="fa fa-envelope-open" aria-hidden="true"></i>
        </h4>
        <hr />
        <Message/>
        <Message/>
        
      </div>
    </>
  );
};

export default Messages;
