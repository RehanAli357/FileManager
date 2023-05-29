import React,{useEffect, useState} from 'react'
import {LoginCotext} from "./Context/LoginContext";
import { CLIENT_ID,API_KEY,SCOPE } from './CredentialData';
import {gapi} from "gapi-script"

import AllRoutes from './Routes/AllRoutes';

const client_id=CLIENT_ID;
const api_key=API_KEY;
const scope=SCOPE

const App = () => {
  const [userToken,setUserToken]=useState("");
  useEffect(()=>{
    const start =()=>{
      gapi.client.init({
        API_KEY:api_key,
        CLIENT_ID:client_id,
        SCOPE:scope
      })
    };
    gapi.load('client:auth2',start);
  })
  return (
    <React.Fragment>
      <LoginCotext.Provider value={{userToken,setUserToken}}>
      <AllRoutes/>
      </LoginCotext.Provider>
    </React.Fragment>
  )
}

export default App
