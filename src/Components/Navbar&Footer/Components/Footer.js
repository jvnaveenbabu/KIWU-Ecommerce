import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import FAQ from "./FAQ/Faq";

const Footer = () => {
  return (
    <>
      <div className="pt-3 pb-3 mb-4" style={{ background: "#fafafa" }}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h4 style={{ marginTop: "10px" }}>ABOUT US</h4>
              <NavLink to="" className="link">
                PURPLE STYLE LABS
              </NavLink>{" "}
              <br />
              <NavLink to="" className="link">
                POP UP SHOW
              </NavLink>{" "}
              <br />
              <NavLink to="" className="link">
                STUDIO LOCATOR
              </NavLink>{" "}
              <br />
              <NavLink to="" className="link">
                POP UP BLOG
              </NavLink>{" "}
              <br />
            </div>
            <div className="col-3">
              <h4 style={{ marginTop: "10px" }}>CUSTOMER CARE</h4>
              <NavLink to="" className="link">
                PURPLE STYLE LABS
              </NavLink>{" "}
              <br />
              <NavLink to="" className="link">
                POP UP SHOW
              </NavLink>{" "}
              <br />
              <NavLink to="" className="link">
                STUDIO LOCATOR
              </NavLink>{" "}
              <br />
              <NavLink to="" className="link">
                POP UP BLOG
              </NavLink>{" "}
              <br />
            </div>
            <div className="col-3">
              <h4 style={{ marginTop: "10px" }}>CONTACT US</h4>
              <NavLink to="" className="link">
                <i class="fas fa-phone-alt"></i>
                <span className="pr-4">+91 7813131232</span>
              </NavLink>
              <br />
              <NavLink to="" className="link">
                <i class="fab fa-whatsapp"></i>
                <span className="pr-4">+91 8245123782</span>
              </NavLink>
              <br />
              <NavLink to="" className="link">
                <i class="fas fa-envelope-open-text"></i>
                <span>customercare@kiwufashions.com</span>
              </NavLink>
              <br />
            </div>
            <div className="col-3">
              <h4 style={{ marginTop: "10px" }}>FOLLOW US</h4>
              <NavLink to="" className="link">
                <i class="fab fa-facebook-f" style={{ color: "#4267B2" }}></i>
              </NavLink>
              <NavLink to="" className="link">
                <i class="fab fa-instagram" style={{ color: "#e83647" }}></i>
              </NavLink>
              <NavLink to="" className="link">
                <i class="fab fa-twitter" style={{ color: "	#1DA1F2" }}></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <FAQ />
    </>
  );
};

export default Footer;
