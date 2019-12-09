import React from "react";
import { Navbar } from "react-bootstrap";

import logo from "../../space-shuttle.png";
import "./header.styles.css";

const Header = () => (
  <React.Fragment>
    <Navbar className="Header">
      <Navbar.Brand href="#home">
        <img
          alt="logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        <span className="HeaderTitle">Finding Falcone!</span>
      </Navbar.Brand>
    </Navbar>
    <hr style={{ marginTop: 0 }} />
  </React.Fragment>
);

export default Header;
