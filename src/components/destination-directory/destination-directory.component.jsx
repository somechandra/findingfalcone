import React from "react";

import Destination from "../destination/destination.component";

import "./destination-directory.styles.css";

const DestinationDirectory = ({
  options,
  vehicles,
  selectOptionFirst,
  selectOptionSecond,
  selectOptionThird,
  selectOptionFourth,
  handleChangeFirstSelect,
  handleChangeSecondSelect,
  handleChangeThirdSelect,
  handleChangeFourthSelect,
  handleChangeVehicleRadioFirst,
  handleChangeVehicleRadioSecond,
  handleChangeVehicleRadioThird,
  handleChangeVehicleRadioFourth
}) => (
  <div className="DestinationDirectory">
    <Destination
      id="firstDestination"
      options={options}
      selectOption={selectOptionFirst}
      handleChangeSelect={handleChangeFirstSelect}
      vehicles={vehicles}
      handleChangeVehicleRadio={handleChangeVehicleRadioFirst}
    />
    <Destination
      id="secondDestination"
      options={options}
      selectOption={selectOptionSecond}
      handleChangeSelect={handleChangeSecondSelect}
      vehicles={vehicles}
      handleChangeVehicleRadio={handleChangeVehicleRadioSecond}
    />
    <Destination
      id="secondDestination"
      options={options}
      selectOption={selectOptionThird}
      handleChangeSelect={handleChangeThirdSelect}
      vehicles={vehicles}
      handleChangeVehicleRadio={handleChangeVehicleRadioThird}
    />
    <Destination
      id="secondDestination"
      options={options}
      selectOption={selectOptionFourth}
      handleChangeSelect={handleChangeFourthSelect}
      vehicles={vehicles}
      handleChangeVehicleRadio={handleChangeVehicleRadioFourth}
    />
  </div>
);

export default DestinationDirectory;
