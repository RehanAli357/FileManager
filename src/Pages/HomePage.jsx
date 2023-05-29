//React Lib
import React, { useContext, useEffect } from "react";

//Third Part Tools
import { useNavigate } from "react-router-dom";
import useDrivePicker from "react-google-drive-picker";

//Componets
import Logout from "../Auth/Logout";
import { LoginCotext } from "../Context/LoginContext";

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
            alert("hi");
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
