import React from "react";
import Login from "../Auth/Login";
import "../Assets/Style/AuthStyle/authCard.css";
import Logo from "../Assets/Images/folder.png";
import google from "../Assets/Images/google.png";

const AuthCard = () => {
  return (
    <React.Fragment>
      <div className="Auth">
        <div className="AuthOne">
          <h1>Welocome To File Handler</h1>
          <div className="Logo">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className="Signup">
        <b>SignUp with</b><img src={google} alt="" /><Login />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthCard;
