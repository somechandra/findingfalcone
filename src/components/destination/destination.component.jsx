import React from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import Select from "react-select";

import "./destination.styles.css";

const Destination = ({
  id,
  options,
  selectOption,
  handleChangeSelect,
  vehicles,
  handleChangeVehicleRadio
}) => {
  return (
    <Card>
      <Card.Body>
        <Select
          value={selectOption}
          options={options}
          onChange={handleChangeSelect}
        />
      </Card.Body>
      {selectOption ? (
        <Form>
          <fieldset>
            <Form.Group as={Row}>
              <Col sm={10}>
                {vehicles.map(vehicle => {
                  const disabled = vehicle.total_no === 0;
                  return (
                    <Form.Check
                      key={id + vehicle.name.replace(/\s/g, "").toLowerCase()}
                      type="radio"
                      custom
                      disabled={disabled}
                      label={vehicle.name + " (" + vehicle.total_no + ")"}
                      name={id + "formHorizontalRadios"}
                      id={
                        Math.floor(100000000 + Math.random() * 900000000) +
                        vehicle.name.replace(/\s/g, "").toLowerCase() +
                        "formHorizontalRadios1"
                      }
                      onChange={() =>
                        handleChangeVehicleRadio(
                          vehicle.name,
                          vehicle,
                          selectOption
                        )
                      }
                    />
                  );
                })}
              </Col>
            </Form.Group>
          </fieldset>
        </Form>
      ) : null}
    </Card>
  );
};

export default Destination;
