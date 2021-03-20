import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";

import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row"></div>
          </div>
        </Jumbotron>
        <Navbar color="light" light sticky="top" expand="md" className="border-bottom navColor">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} className="ml-auto" />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="m-auto">
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/photos">
                    Photos & Floor Plans
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/amenities">
                    Amenities
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contact">
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
