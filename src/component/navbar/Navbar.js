import React from "react";

import * as ReactBootStrap from "react-bootstrap";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/Home">
        <ReactBootStrap.Navbar.Brand>SKATE MOON</ReactBootStrap.Navbar.Brand>
      </Link>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.Nav.Link href="/BLOG">BLOG</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/SERVICE">SERVICE</ReactBootStrap.Nav.Link>
          <ReactBootStrap.NavDropdown title="SKATE" id="collasible-nav-dropdown">

            <ReactBootStrap.NavDropdown.Item href="/PRODUCT">PRODUCT</ReactBootStrap.NavDropdown.Item>


            <ReactBootStrap.NavDropdown.Item href="/TEAM">TEAM</ReactBootStrap.NavDropdown.Item>

            <ReactBootStrap.NavDropdown.Divider />

            <ReactBootStrap.NavDropdown.Item href="/FAQ">FAQ</ReactBootStrap.NavDropdown.Item>

          </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
          <ReactBootStrap.Nav.Link href="/BLOODMOON">BLOOD MOON</ReactBootStrap.Nav.Link>

          <ReactBootStrap.Nav.Link eventKey={2} href="/LOGIN">
            LOGIN
           </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
}
export default Navbar;