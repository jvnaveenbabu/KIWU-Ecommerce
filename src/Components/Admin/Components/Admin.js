import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  var items = [
    { cate: "Create Product", link: "/admin/create/product" },
    { cate: "Manage Products", link: "/admin/manage/product" },
  ];
  return (
    <div className="container p-4" style={{
           border: "10px solid #353839",
           marginTop:"10px",
           
       }}>
      <div >
        <div
          className="jumbotron text-center text-white"
          style={{ fontWeight:"20000px",
            backgroundColor:"#353839",
            paddingTop:"20px",
            paddingBottom:"20px",
            marginBottom:"20px"
          }}
        >
          <h2 className="display-4 logo" style={{fontWeight:"20000px"}}>Welcome to Admin area</h2>
          <p className="lead">
            <b>Manage all your Products here</b>
          </p>
        </div>
      </div>
      <div className="card">
        <h3 className="card-header">Admin Navigation</h3>

        <div class="row">
          {items.map((item) => {
            return (
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <Link to={item.link} style={{color:"#353839",textDecoration:"none" }}>
                        <b>{item.cate}</b>
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Admin;
