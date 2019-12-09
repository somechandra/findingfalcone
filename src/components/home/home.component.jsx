import React from "react";

import DestinationDirectory from "../destination-directory/destination-directory.component";
import PlanetControls from "../planet-controls/planet-controls.component";

import "./home.styles.css";

const Home = ({
  planets,
  vehicles,
  firstDestination,
  secondDestination,
  thirdDestination,
  fourthDestination,
  handleChangeFirstSelect,
  handleChangeSecondSelect,
  handleChangeThirdSelect,
  handleChangeFourthSelect,
  timeTaken,
  isDisplayFindFalconeBtn,
  handleFindFalconeClick,
  handleChangeVehicleRadioFirst,
  handleChangeVehicleRadioSecond,
  handleChangeVehicleRadioThird,
  handleChangeVehicleRadioFourth
}) => {
  return (
    <div className="Home">
      <DestinationDirectory
        options={planets}
        selectOptionFirst={firstDestination}
        selectOptionSecond={secondDestination}
        selectOptionThird={thirdDestination}
        selectOptionFourth={fourthDestination}
        handleChangeFirstSelect={handleChangeFirstSelect}
        handleChangeSecondSelect={handleChangeSecondSelect}
        handleChangeThirdSelect={handleChangeThirdSelect}
        handleChangeFourthSelect={handleChangeFourthSelect}
        vehicles={vehicles}
        handleChangeVehicleRadioFirst={handleChangeVehicleRadioFirst}
        handleChangeVehicleRadioSecond={handleChangeVehicleRadioSecond}
        handleChangeVehicleRadioThird={handleChangeVehicleRadioThird}
        handleChangeVehicleRadioFourth={handleChangeVehicleRadioFourth}
      />
      <PlanetControls
        timeTaken={timeTaken}
        isDisplayFindFalconeBtn={isDisplayFindFalconeBtn}
        handleFindFalconeClick={handleFindFalconeClick}
      />
    </div>
  );
};

export default Home;
