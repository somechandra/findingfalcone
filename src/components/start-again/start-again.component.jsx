import React from "react";
import { Button } from "react-bootstrap";

import "./start-again.styles.css";

const StartAgain = ({ btnName, handleOnClick }) => {
  return (
    <div className="StartAgain">
      <div>
        <Button variant="primary" onClick={handleOnClick}>
          {btnName}
        </Button>
      </div>
    </div>
  );
};

export default StartAgain;
