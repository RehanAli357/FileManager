import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";

import { GoogleLogin } from "react-google-login";

import {CLIENT_ID} from "../CredentialData";

import { LoginCotext } from "../Context/LoginContext";
const clientID=CLIENT_ID;

const Login = ()=>{
    const {setUserToken}=useContext(LoginCotext);
    const navigate = useNavigate();
    const onSuccess =(res)=>{
        navigate("/Home");
        setUserToken(res.accessToken)
    }
    const onFailure = (res)=>{
        console.log("LoginFailed",res);
    }
    return(
        <React.Fragment>
            <GoogleLogin
            clientId={clientID}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
        </React.Fragment>
    );
}

export default Login;