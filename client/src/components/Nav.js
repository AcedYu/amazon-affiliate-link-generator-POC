import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";

const Navigation = () => {

  return (
    <>
      <Navbar bg="light" variant="light" className="border-bottom px-0" sticky="top">
        <Navbar.Brand href="/">
          <h1>Community Chest</h1>
        </Navbar.Brand>
        <Nav className="ml-auto">
          {/* <Nav.Link>
            <h6>Discord Bot</h6>
          </Nav.Link> */}
          <Nav.Link>
            <h6>Create Account</h6>
          </Nav.Link>
          <Nav.Link>
            <h6>Login</h6>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navigation;