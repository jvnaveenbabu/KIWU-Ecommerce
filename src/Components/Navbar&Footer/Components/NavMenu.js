//NavMenu Component
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavMenu.css";
import Search from "./Search/Search";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="container-fluid mt-2">
      <div className="row ">
        <div
          className="col-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <select name="currency" id="currency">
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="AUD">AUD</option>
            <option value="CAD">CAD</option>
          </select>
        </div>
        <div className="col-4 text-center">
          <h3 className="logo">KIWU</h3>
        </div>
        <div
          className="col-4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavLink to="#" exact className="icons">
            <Search />
          </NavLink>
          <NavLink to="#" exact className="icons">
            <i className="fas fa-user"></i>
          </NavLink>
          <NavLink to="#" exact className="icons">
            <i className="far fa-heart"></i>
          </NavLink>
          <NavLink to="#" exact className="icons">
            <i className="fas fa-shopping-cart"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
