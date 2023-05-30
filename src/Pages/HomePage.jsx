//React Lib
import React, { useContext, useEffect } from "react";

//Third Part Tools
import { useNavigate } from "react-router-dom";
import useDrivePicker from "react-google-drive-picker/dist";

//Componets
import Logout from "../Auth/Logout";
import { LoginCotext } from "../Context/LoginContext";
import { CLIENT_ID,  ACCESS_TOKEN } from "../CredentialData";

//Style
import "../Assets/Style/HomeStyle/home.css";

const HomePage = () => {
  const [openPicker, data] = useDrivePicker();  
  const { userToken } = useContext(LoginCotext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userToken) {
      navigate("/");
    }
  }, [userToken, navigate]);
  const handleOpenPicker = () => {
    openPicker({
      clientId: CLIENT_ID,
      developerKey: ACCESS_TOKEN,
      token:ACCESS_TOKEN,
      viewId: "DOCS",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      callbackFunction: (data) => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button')
        }
        console.log(data)
      },
    })
  }

  useEffect(()=>{
    if(data){
      data.docs.map((i)=>console.log(i));
    }
  },[data])
  return (
    <React.Fragment>
      <div className="HomePage">
        <div className="Heading">
          <h1>Welcome To GoogleDrive Manager</h1>
        </div>
        <div className="Logout">
          <Logout />
        </div>
        <div className="FileExp">
          <p>Explore Your Files Here</p>
          <p>👇</p>
          <button
            onClick={() => {
              handleOpenPicker();
            }}
          >
            Open Picker
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;