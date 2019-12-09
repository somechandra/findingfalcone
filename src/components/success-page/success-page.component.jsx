import React from "react";

import "./success-page.styles.css";

const SuccessPage = ({ timeTaken, planetName }) => {
  return (
    <div className="SuccessPage">
      <div className="success successGreenColor">
        Success! Congratulations on Finding Falcone. King Shan is mighty
        pleased.
      </div>
      <div className="success">Time Taken: {timeTaken}</div>
      <div className="success">Planet Found: {planetName}</div>
    </div>
  );
};

export default SuccessPage;
