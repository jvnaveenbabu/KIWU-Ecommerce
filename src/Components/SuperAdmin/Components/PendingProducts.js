import React from "react";

const PendingProducts = () => {
  return (
    <>
    <h2 style={{textAlign:"center",marginTop:"10px",marginBottom:"15px"}}>Pending Products</h2>
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
                class="btn btn-success"
                style={{ fontSize: "15px", marginTop: "4px" }}
              >
                Approve
              </button>
              <button
                type="button"
                class="btn btn-danger"
                style={{ fontSize: "15px", marginTop: "4px" }}
              >
                DisApprove
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
                class="btn btn-success"
                style={{ fontSize: "15px", marginTop: "4px" }}
              >
                Approve
              </button>
              <button
                type="button"
                class="btn btn-danger"
                style={{ fontSize: "15px", marginTop: "4px" }}
              >
                DisApprove
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default PendingProducts;
