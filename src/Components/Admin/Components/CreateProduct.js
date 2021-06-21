import React, { useState } from "react";
import { AddProduct } from "../adminThunks";
import { useDispatch, useSelector } from "react-redux"


const CreateProduct = () => {
  const dispatch = useDispatch()

  const { addproduct_loading,addproduct_error} = useSelector(state => state.adminProduct)

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    countInStock: "",
    image: "",
    designer: "",
    category: "",
  });

  const { name, description, price, countInStock, image, category, designer } = product;

  const handleChange = (item) => (event) => {
    if (item == "image") {
      setProduct({ ...product, [item]:URL.createObjectURL(event.target.files[0]) });
    } else {
      setProduct({ ...product, [item]: event.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product)
    dispatch(AddProduct(product));
    console.log("product", product);
    console.log(addproduct_error);
    console.log(addproduct_loading);
  };

  return (
    <div>
    {/* {
      (addproduct_loading==true)?(
        <>Loading..</>
      ):(
        <>Npot Loading..</>
  
      )
    } */}
      <h2 style={{ textAlign: "center", marginBottom: "20px"}}>Add Product</h2>
      <div class="container" 
        style={{ borderRadius:"20px" }}
        >
      <form
        class="form-main"
        style={{
           border: "10px solid #353839",
       }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="form-group admin-form-pad">
          <label for="image1" style={{ marginRight: "10px"}}>
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
          <label>Brand Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Name"
            value={designer}
            onChange={handleChange("designer")}
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

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
      </div>
      {/* {
      (addproduct_error)?(
        <>Loading..</>
      ):(
        <>Npot Loading..</>
  
      )
    } */}
    </div>
  );
};

export default CreateProduct;
