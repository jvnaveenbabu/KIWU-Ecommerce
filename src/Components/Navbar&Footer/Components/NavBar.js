//Navbar Component
import React from "react";
import "./NavBar.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="menu">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="d-flex justify-content-between m-auto">
          <Nav.Link
            active
            href="#home"
            style={{
              color: "#000",
              paddingRight: "20px",
              paddingLeft: "20px",
            }}
          >
            HOME
          </Nav.Link>

          <Nav.Link
            href="#link"
            style={{ color: "#000", paddingRight: "20px", paddingLeft: "20px" }}
          >
            WHAT's NEW
          </Nav.Link>

          <NavDropdown
            title="WOMEN"
            id="basic-nav-dropdown"
            className="navDropDown"
            style={{ color: "#000", paddingRight: "20px", paddingLeft: "20px" }}
          >
            <div className="row">
              <div className="col-lg-3 col-3 offset-1">
                <h5
                  className="pl-3 head-2"
                  style={{
                    color: "#000",
                    marginTop: "5px",
                  }}
                >
                  INDIAN WEAR
                </h5>
                <NavDropdown.Item href="#action/3.1">SUITS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">TOPS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">TUNICS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">KURTIS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">DRESSES</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">LEHANGAS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">SAREES</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">BLOUSES</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">DUPATTAS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">PALAZZOS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">SKIRTS</NavDropdown.Item>
              </div>
              <div className="col-lg-3 col-3">
                <h5
                  className="pl-3 head-2"
                  style={{ color: "#000", marginTop: "5px" }}
                >
                  WESTERN WEAR
                </h5>
                <NavDropdown.Item href="#action/3.1">DRESSES</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">TOPS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">SHIRTS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  JUMPSUITS
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">BOTTOMS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">SKIRTS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">JACKETS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">SHORTS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  CO-ORD SETS
                </NavDropdown.Item>
              </div>
              <div className=" col-lg-3 col-3">
                <img src="https://source.unsplash.com/random/250x300" />
              </div>
            </div>
          </NavDropdown>

          <NavDropdown
            title="MEN"
            id="basic-nav-dropdown"
            style={{ color: "#000", paddingRight: "20px", paddingLeft: "20px" }}
          >
            <div className="row">
              <div className="col-lg-3 col-3 offset-1">
                <h5
                  className="pl-3 head-2"
                  style={{ color: "#000", marginTop: "5px" }}
                >
                  TOP WEAR
                </h5>
                <NavDropdown.Item href="#action/3.1">SHIRTS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  POLO SHIRTS
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">JACKETS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">HOODIES</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">SUITS</NavDropdown.Item>
              </div>
              <div className=" col-lg-3 col-3">
                <h5 className="pl-3 head-2" style={{ marginTop: "5px" }}>
                  BOTTOM WEAR
                </h5>
                <NavDropdown.Item href="#action/3.1">JEANS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">TROUSER</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">CHINOS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">SHORTS</NavDropdown.Item>
              </div>
              <div className="col-lg-3 col-3">
                <img src="https://source.unsplash.com/random/200x250" />
              </div>
            </div>
          </NavDropdown>
          <Nav.Link
            href="#link"
            style={{ color: "#000", paddingRight: "20px", paddingLeft: "20px" }}
          >
            SALE
          </Nav.Link>

          <Nav.Link
            href="#link"
            style={{ color: "#000", paddingRight: "20px", paddingLeft: "20px" }}
          >
            BRANDS
          </Nav.Link>
          <Nav.Link
            href="#link"
            style={{ color: "#000", paddingRight: "20px", paddingLeft: "20px" }}
          >
            WEDDING EDITS
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
