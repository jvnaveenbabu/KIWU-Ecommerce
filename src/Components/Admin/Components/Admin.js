import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  var items = [
    { cate: "Create Category", link: "/admin/create/category" },
    { cate: "Create Product", link: "/admin/create/product" },
    { cate: "Manage Categories", link: "/admin/manage/category" },
    { cate: "Manage Products", link: "/admin/manage/product" },
  ];
  return (
    <div className="container p-4" style={{ backgroundColor: "#ffe6f2" }}>
      <div className="container-fluid">
        <div
          className="jumbotron text-white text-center"
          style={{ backgroundColor: "#ff99cc" }}
        >
          <h2 className="display-4 logo">Welcome to Admin area</h2>
          <p className="lead">
            <b>Manage all your Products here</b>
          </p>
        </div>
      </div>

      <div className="card">
        <h4 className="card-header">Admin Navigation</h4>

        <div class="row">
          {items.map((item) => {
            return (
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <Link to={item.link} style={{ color: "#FF69B4" }}>
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
