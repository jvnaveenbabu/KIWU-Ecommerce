import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPendingProducts } from "../superAdminThunks";

const PendingProducts = () => {
  // const {pendingProducts_loading } = useSelector(state => state.superAdmin)
  // const dispatch=useDispatch();
  // useEffect(() => {
  //   dispatch(GetPendingProducts());
  
  // }, []);
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
                    src="https://i.ibb.co/MGntWDm/b2e4f9cf641093d8987a91bc7f4d4e30.jpg"
                    className="mp-img"
                    alt="img"
                  />
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card-body">
                    <h5 class="card-title">Product Name</h5>
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
                    src="https://i.ibb.co/MGntWDm/b2e4f9cf641093d8987a91bc7f4d4e30.jpg"
                    className="mp-img"
                    alt="img"
                  />
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card-body">
                    <h5 class="card-title">Product Name</h5>
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
