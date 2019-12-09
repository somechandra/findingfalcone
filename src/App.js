import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import { apiCall } from "./api/api";
import Header from "./components/header/header.component";
import Home from "./components/home/home.component";
import SuccessPage from "./components/success-page/success-page.component";
import FailurePage from "./components/failure-page/failure-page.component";
import ErrorPage from "./components/error-page/error-page.component";
import StartAgain from "./components/start-again/start-again.component";
import Footer from "./components/footer/footer.component";

import {
  URL_PLANETS,
  URL_VEHICLES,
  URL_TOKEN,
  URL_POST_REQUEST
} from "./utils";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.destinationNames = {
      firstDestination: "firstDestination",
      secondDestination: "secondDestination",
      thirdDestination: "thirdDestination",
      fourthDestination: "fourthDestination"
    };
    this.state = {
      token: "",
      planets: null,
      vehicles: null,
      [this.destinationNames.firstDestination]: null,
      [this.destinationNames.secondDestination]: null,
      [this.destinationNames.thirdDestination]: null,
      [this.destinationNames.fourthDestination]: null,
      timeTaken: 0,
      isDisplayFindFalconeBtn: false,
      falcone: {
        [this.destinationNames.firstDestination]: {},
        [this.destinationNames.secondDestination]: {},
        [this.destinationNames.thirdDestination]: {},
        [this.destinationNames.fourthDestination]: {}
      },
      result: null
    };
  }

  componentDidMount() {
    this.updatePlanets();
    this.updateVehiclesRecord();
    this.updateToken();
  }

  updateVehiclesRecord = () => {
    apiCall(URL_VEHICLES).then(records => this.setState({ vehicles: records }));
  };

  updatePlanets = () => {
    apiCall(URL_PLANETS).then(records => {
      const options = records.map(record => ({
        value: record.name.toLowerCase(),
        label: record.name,
        distance: record.distance,
        vehicle: ""
      }));
      this.setState({ planets: options });
    });
  };

  updateToken = () => {
    apiCall(URL_TOKEN, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(records => this.setState(records));
  };

  handleChange = (e, stateKey) => {
    this.setState({ [stateKey]: e });
    const planetName = e.label;
    if (
      !this.isEmptyObject(this.state.falcone[stateKey]) &&
      this.state.falcone[stateKey].planetName !== planetName
    ) {
      this.setState(
        {
          falcone: {
            ...this.state.falcone,
            [stateKey]: {
              ...this.state.falcone[stateKey],
              planetName: planetName
            }
          }
        },
        () => {
          this.updateTimeTaken();
        }
      );
    }
  };

  handleChangeVehicleRadioFirst = (name, vehicle, selectOption) => {
    let firstRadioSelect = {
      planetName: selectOption.label,
      vehicleName: vehicle.name,
      timeTaken: selectOption.distance / vehicle.speed
    };

    this.setState(
      {
        falcone: {
          ...this.state.falcone,
          [this.destinationNames.firstDestination]: firstRadioSelect
        }
      },
      () => this.updateTimeTaken()
    );
    this.updateVehicles(this.destinationNames.firstDestination, name);
  };

  handleChangeVehicleRadioSecond = (name, vehicle, selectOption) => {
    let secondRadioSelect = {
      planetName: selectOption.label,
      vehicleName: vehicle.name,
      timeTaken: selectOption.distance / vehicle.speed
    };

    this.setState(
      {
        falcone: {
          ...this.state.falcone,
          [this.destinationNames.secondDestination]: secondRadioSelect
        }
      },
      () => this.updateTimeTaken()
    );
    this.updateVehicles(this.destinationNames.secondDestination, name);
  };

  handleChangeVehicleRadioThird = (name, vehicle, selectOption) => {
    let thirdRadioSelect = {
      planetName: selectOption.label,
      vehicleName: vehicle.name,
      timeTaken: selectOption.distance / vehicle.speed
    };

    this.setState(
      {
        falcone: {
          ...this.state.falcone,
          [this.destinationNames.thirdDestination]: thirdRadioSelect
        }
      },
      () => this.updateTimeTaken()
    );
    this.updateVehicles(this.destinationNames.thirdDestination, name);
  };

  handleChangeVehicleRadioFourth = (name, vehicle, selectOption) => {
    let fourthRadioSelect = {
      planetName: selectOption.label,
      vehicleName: vehicle.name,
      timeTaken: selectOption.distance / vehicle.speed
    };

    this.setState(
      {
        falcone: {
          ...this.state.falcone,
          [this.destinationNames.fourthDestination]: fourthRadioSelect
        }
      },
      () => this.updateTimeTaken()
    );
    this.updateVehicles(this.destinationNames.fourthDestination, name);
  };

  updateVehicles = (destinationName, vehicleName) => {
    const dest = this.state.falcone[destinationName];
    let updatedVehicles = this.state.vehicles.map(vehicle => {
      if (vehicle.name === dest.vehicleName) {
        return { ...vehicle, total_no: vehicle.total_no + 1 };
      } else if (vehicle.name === vehicleName) {
        return {
          ...vehicle,
          total_no:
            vehicle.total_no > 0 ? vehicle.total_no - 1 : vehicle.total_no
        };
      } else {
        return vehicle;
      }
    });
    this.setState({ vehicles: updatedVehicles });
  };

  updateTimeTaken = () => {
    const firstDest = this.state.falcone[
      this.destinationNames.firstDestination
    ];
    const secondDest = this.state.falcone[
      this.destinationNames.secondDestination
    ];
    const thirdDest = this.state.falcone[
      this.destinationNames.thirdDestination
    ];
    const fourthDest = this.state.falcone[
      this.destinationNames.fourthDestination
    ];
    let timeTaken = 0;
    if (!this.isEmptyObject(firstDest)) {
      timeTaken += firstDest.timeTaken;
    }
    if (!this.isEmptyObject(secondDest)) {
      timeTaken += secondDest.timeTaken;
    }
    if (!this.isEmptyObject(thirdDest)) {
      timeTaken += thirdDest.timeTaken;
    }
    if (!this.isEmptyObject(fourthDest)) {
      timeTaken += fourthDest.timeTaken;
    }
    if (
      !this.isEmptyObject(firstDest) &&
      !this.isEmptyObject(secondDest) &&
      !this.isEmptyObject(thirdDest) &&
      !this.isEmptyObject(fourthDest)
    ) {
      this.setState({ isDisplayFindFalconeBtn: true });
    }
    this.setState({ timeTaken: timeTaken });
  };

  handleFindFalconeClick = () => {
    const falconeArray = Object.values(this.state.falcone);
    const planetsName = falconeArray.map(obj => obj.planetName);
    const vehiclesName = falconeArray.map(obj => obj.vehicleName);
    const requestBody = {
      token: this.state.token,
      planet_names: planetsName,
      vehicle_names: vehiclesName
    };
    apiCall(URL_POST_REQUEST, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    }).then(record => {
      this.setState({ result: record });
      this.props.history.push("/result");
    });
  };

  handleStartAgain = () => {
    this.setState({
      [this.destinationNames.firstDestination]: null,
      [this.destinationNames.secondDestination]: null,
      [this.destinationNames.thirdDestination]: null,
      [this.destinationNames.fourthDestination]: null,
      timeTaken: 0,
      isDisplayFindFalconeBtn: false,
      falcone: {
        [this.destinationNames.firstDestination]: {},
        [this.destinationNames.secondDestination]: {},
        [this.destinationNames.thirdDestination]: {},
        [this.destinationNames.fourthDestination]: {}
      },
      result: null
    });
    this.updatePlanets();
    this.updateVehiclesRecord();
    this.updateToken();
    this.props.history.push("/");
  };

  isEmptyObject = obj =>
    Object.entries(obj).length === 0 && obj.constructor === Object;

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                planets={this.state.planets}
                vehicles={this.state.vehicles}
                firstDestination={
                  this.state[this.destinationNames.firstDestination]
                }
                secondDestination={
                  this.state[this.destinationNames.secondDestination]
                }
                thirdDestination={
                  this.state[this.destinationNames.thirdDestination]
                }
                fourthDestination={
                  this.state[this.destinationNames.fourthDestination]
                }
                handleChangeFirstSelect={e =>
                  this.handleChange(e, this.destinationNames.firstDestination)
                }
                handleChangeSecondSelect={e =>
                  this.handleChange(e, this.destinationNames.secondDestination)
                }
                handleChangeThirdSelect={e =>
                  this.handleChange(e, this.destinationNames.thirdDestination)
                }
                handleChangeFourthSelect={e =>
                  this.handleChange(e, this.destinationNames.fourthDestination)
                }
                timeTaken={this.state.timeTaken}
                isDisplayFindFalconeBtn={this.state.isDisplayFindFalconeBtn}
                handleFindFalconeClick={this.handleFindFalconeClick}
                handleChangeVehicleRadioFirst={
                  this.handleChangeVehicleRadioFirst
                }
                handleChangeVehicleRadioSecond={
                  this.handleChangeVehicleRadioSecond
                }
                handleChangeVehicleRadioThird={
                  this.handleChangeVehicleRadioThird
                }
                handleChangeVehicleRadioFourth={
                  this.handleChangeVehicleRadioFourth
                }
              />
            )}
          />
          <Route
            exact
            path="/result"
            render={() =>
              this.state.result ? (
                this.state.result.status === "success" ? (
                  <SuccessPage
                    timeTaken={this.state.timeTaken}
                    planetName={this.state.result.planet_name}
                  />
                ) : this.state.result.status === "false" ? (
                  <FailurePage failedMsg="We could not find Falcone. Let's try once again!!!" />
                ) : (
                  <ErrorPage error={this.state.result.error} />
                )
              ) : (
                <StartAgain
                  btnName="Start Again"
                  handleOnClick={this.handleStartAgain}
                />
              )
            }
          />
        </Switch>
        {this.state.result ? (
          <StartAgain
            btnName="Start Again"
            handleOnClick={this.handleStartAgain}
          />
        ) : null}
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
