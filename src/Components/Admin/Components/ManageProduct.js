import React from "react";

const ManageProduct = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="card">
              <div class="row">
                <div class="col-lg-6 mb-4">
                  <img
                    src="https://www.w3schools.com/colors/img_colormap.gif"
                    className="mp-img"
                    alt="img"
                  />
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card-body">
                    <h5 class="card-title">Prodcut Name</h5>
                    <p class="card-text">
                      Description about the product will be mentioned here.
                    </p>
                    <p class="card-text">Price:*** RS</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="btn btn-info"
                style={{ fontSize: "15px", marginTop: "4px" }}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                style={{ fontSize: "15px", marginTop: "4px" }}
              >
                Delete
              </button>
            </div>
          </div>

          <div class="col-lg-6 mb-4">
            <div class="card">
              <div class="row">
                <div class="col-lg-6 mb-4">
                  <img
                    src="https://www.w3schools.com/colors/img_colormap.gif"
                    className="mp-img"
                    alt="img"
                  />
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card-body">
                    <h5 class="card-title">Prodcut Name</h5>
                    <p class="card-text">
                      Description about the product will be mentioned here.
                    </p>
                    <p class="card-text">Price:*** RS</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="btn btn-info"
                style={{ fontSize: "15px", marginTop: "4px" }}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                style={{ fontSize: "15px", marginTop: "4px" }}
              >
                Delete
              </button>
            </div>
          </div>

          <div class="col-lg-6 mb-4">
            <div class="card">
              <div class="row">
                <div class="col-lg-6 mb-4">
                  <img
                    src="https://www.w3schools.com/colors/img_colormap.gif"
                    className="mp-img"
                    alt="img"
                  />
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card-body">
                    <h5 class="card-title">Prodcut Name</h5>
                    <p class="card-text">
                      Description about the product will be mentioned here.
                    </p>
                    <p class="card-text">Price:*** RS</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="btn btn-info"
                style={{ fontSize: "15px", marginTop: "4px" }}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                style={{ fontSize: "15px", marginTop: "4px" }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageProduct;
