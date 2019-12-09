import React from "react";
import { Button } from "react-bootstrap";

import "./planet-controls.styles.css";

const PlanetControls = ({
  timeTaken,
  handleFindFalconeClick,
  isDisplayFindFalconeBtn
}) => (
  <div className="PanelControls">
    <div className="PanelControlsLabel">Time taken: {timeTaken}</div>
    {isDisplayFindFalconeBtn ? (
      <div>
        <Button variant="primary" onClick={handleFindFalconeClick}>
          Find Falcone!
        </Button>
      </div>
    ) : null}
  </div>
);

export default PlanetControls;
