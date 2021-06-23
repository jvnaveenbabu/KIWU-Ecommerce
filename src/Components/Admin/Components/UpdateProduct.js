import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import {useLocation } from "react-router-dom";
import {EditProduct} from "../adminThunks"
const UpdateProduct = () => {
  const dispatch=useDispatch();
  const history=useHistory();
  const location = useLocation()
  const [product, setProduct] = useState({
    id:"",
    name: "",
    description: "",
    price: "",
    countInStock: "",
    image: "",
    brand: "",
    category: ""
  });

  const { name, description, price, countInStock, image, category, brand } = product;
  useEffect(()=>{
    let editProduct = location.state === undefined ? '' : location.state.editProduct

    setProduct({...product,
      id:editProduct._id,
      name:editProduct.name,
      description:editProduct.description,
      price:editProduct.price,
      countInStock:editProduct.countInStock,
      image:editProduct.image,
      brand: editProduct.brand,
      category:editProduct.category
    })
  },[])
  const handleChange = (item) => (event) => {
    if (item == "image") {
      setProduct({ ...product, [item]: event.target.files[0] });
    } else {
      setProduct({ ...product, [item]: event.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(EditProduct(product))
    history.push("/admin/manage/product")
    console.log("product", product);
  };

  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Update Product</h2>
      <form
        class="form-main"
        style={{ border: "10px solid #ff66ff" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="form-group admin-form-pad">
          <label for="image1" style={{ marginRight: "10px" }}>
            Product Image
          </label>
          <br />
          <input
            type="file"
            name="image"
            multiple={false}
            onChange={handleChange("image")}
            style={{width:"90%"}}
          />
        </div>

        <div className="form-group admin-form-pad">
          <label>Product Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Name"
            value={name}
            onChange={handleChange("name")}
          />
        </div>

        <div className="form-group admin-form-pad">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Product Price"
            value={price}
            onChange={handleChange("price")}
          />
        </div>

        <div>
          <label>Select Category</label>
          <br />
          <select
            className="form-select admin-form-pad"
            value={category}
            onChange={handleChange("category")}
            style={{ fontSize: "130%", marginBottom: "10px" }}
          >
            <option selected>Select Category</option>
            <option value="Summer Wear">Summer Wear</option>
            <option value="Winter Wear">Winter Wear</option>
            <option value="Silk Clothes">Silk Clothes</option>
          </select>
        </div>

        <div className="form-group admin-form-pad">
          <label>Stock</label>
          <input
            type="number"
            className=" form-control"
            placeholder="Enter Stock"
            value={countInStock}
            onChange={handleChange("countInStock")}
          />
        </div>

        <div className="form-group admin-form-pad">
          <label>Description</label>
          <textarea
            className=" form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={description}
            onChange={handleChange("description")}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Update Product
        </button>
      </form>
    </>
  );
};

export default UpdateProduct;
