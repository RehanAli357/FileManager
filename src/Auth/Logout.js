import React,{useContext} from "react";

import { useNavigate } from "react-router-dom";

import { GoogleLogout } from "react-google-login";

import {CLIENT_ID} from "../CredentialData";
import { LoginCotext } from "../Context/LoginContext";

const clientID=CLIENT_ID;

const Logout = () => {
    const navigate= useNavigate();
    const {setUserToken}=useContext(LoginCotext);
    const onSuccess = (res)=>{
        console.log(res);
        navigate("/");
        setUserToken("");
        console.log("Logout Successful");
    }
  return (
    <React.Fragment>
      <GoogleLogout
      clientId={clientID}
      buttonText="LogOut"
      onLogoutSuccess={onSuccess}
      />
    </React.Fragment>
  )
}

export default Logout
