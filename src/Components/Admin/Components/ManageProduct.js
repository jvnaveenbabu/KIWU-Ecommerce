import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux"
import { GetProducts } from "../adminThunks";
import { Link } from "react-router-dom";

const ManageProduct = () => {
  const dispatch = useDispatch()

  const { getProducts,getProducts_loading,getProducts_error} = useSelector(state => state.adminProduct)
  const history=useHistory();
  useEffect(() => {
    dispatch(GetProducts());
  }, []);
 if(getProducts!=null && getProducts!="")
 {
  console.log(getProducts);
 }
  return (
    <>
    <h2 style={{textAlign:"center",marginTop:"10px",marginBottom:"15px"}}>Manage Products</h2>

      <div class="container">
        <div class="row">

          {
            (getProducts!=null)?(

              getProducts.data.map((item)=>
              (
            <div class="col-lg-6 mb-4" key={item.id}>
            <div class="card">
              <div class="row">
                <div class="col-lg-6 mb-4">
                  <img
                    src="https://in.pinterest.com/pin/688910074241038531/"
                    className="mp-img"
                    alt="img"
                  />
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">
                      {item.description}
                    </p>
                    <p class="card-text">{item.category}</p>
                    <p class="card-text"><b>Price:</b>{item.price}</p>
                    <p class="card-text"><b>Stock:</b>{item.countInStock}</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="btn btn-info"
                style={{ fontSize: "15px", marginTop: "4px" }}
                onClick={()=>{
                  history.push({
                    pathname: `/admin/edit/product/${item._id}`,
                    state: { editProduct: item, id: item._id }
                  });}
                }
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

                ))):(<></>)

          }

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
                    <h5 class="card-title">Kurti</h5>
                    <p class="card-text">
                      Kurti Design
                    </p>
                    <p class="card-text">Party Wear</p>
                    <p class="card-text"><b>Price:RS.</b>4500</p>
                    <p class="card-text"><b>Stock:</b>20</p>
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

          <div class="col-lg-6 mb-4" >
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
                    <h5 class="card-title">Dress</h5>
                    <p class="card-text">
                      Cotton Wear
                    </p>
                    <p class="card-text">Summer Wear</p>
                    <p class="card-text"><b>Price: Rs.</b>2000</p>
                    <p class="card-text"><b>Stock:</b>42</p>
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
