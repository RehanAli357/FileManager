import React from "react";
import { useNavigate } from "react-router-dom";

import Bot from "../Assets/Images/bot2.png";
import "../Assets/Style/ErrorStyle/error.css";
const Error404 = () => {
  const navigate = useNavigate();

  const GoBack = () => {
    navigate(-1);
  };
  return (
    <React.Fragment>
      <div className="Error">
        <div className="Heading">
        <h1>Error Page</h1>
        <h2>Invalid Route</h2>
        </div>
        <div className="BGImg">
        <img src={Bot} alt="bot" />

        </div>
        <div className="GoBack">
        <button onClick={GoBack}>Go Back</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Error404;
