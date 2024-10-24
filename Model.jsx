import React from "react";
import { Helmet } from "react-helmet-async";

// closeModel => function to close the model

const Model = ({ closeModel, children  }) => {
  return (
    <div className="parent-model">


<Helmet>

<style type="text/css">{`

      

.parent-model {
  position: fixed;
  inset: 0;
  z-index: 3;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: rgba(0, 0, 0, 0.44);
  }
  
  
  .model {
    background-color: whitesmoke;
    width: 450px;
    height: 320px;
    border-radius: 8px;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.5),
    0px 1px 1px 0px rgba(0,0,0,0.5),
    0px 1px 3px 0px rgba(0,0,0,0.5);
  
     position: fixed;
  
    scale: 1;
  }
  



    `}</style>

</Helmet>




      <form className={`model`}>
        <i
          onClick={() => {
            closeModel();
          }}
          className="close fa-solid fa-xmark"
        ></i>

        {children }
      </form>
    </div>
  );
};

export default Model;





// <input
// onChange={(eo) => {
//   setresetEmail(eo.target.value);
// }}
// required
// placeholder=" Email: "
// type="Email"
// id = "fogrotEmailPass"
// />

// <button onClick={(eo) => {
// ResetPasswordBtn(eo)
// }} className="reset-email">
// Reset Password
// </button>

// {showSendEmail && (
// <p className="check-email">
//   please check your email to reset your password
// </p>
// )}

// {forgettenEmailCorrectenece && (
// <p className="wrong-email">
//   Please Enter A Right Email<span style={{ animationDuration:"01s"}}><i style={{color:"red" }}  class="fa-solid fa-file-signature"></i></span>
// </p>
// )}
