import React, { useState } from "react";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    countInStock: "",
    image: "",
    brand:"",
    category: ""
  });

  const { name, description, price, countInStock, image, category, brand } = product;

  const handleChange=item=>event=>{
    if(item=="image")
    {
      setProduct({...product,[item]:event.target.files[0]});
    }
    else
    {
      setProduct({...product,[item]:event.target.value})
    }
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("product",product);
  }

  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Product</h2>
      <form class="form-main" style={{ border: "10px solid #ff66ff" }} onSubmit={(e)=>handleSubmit(e)}>
        <div class="form-group">
          <label for="image1" style={{ marginRight: "10px" }}>
            Product Image
          </label>
          <br />
          <input type="file" name="image" multiple={false}  onChange={handleChange("image")}/>
        </div>

        <div class="form-group">
          <label>Product Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Product Name"
            value={name} onChange={handleChange("name")}
          />
        </div>

        <div class="form-group">
          <label>Price</label>
          <input
            type="number"
            class="form-control"
            placeholder="Enter Product Price"
            value={price} onChange={handleChange("price")}
          />
        </div>

        <div>
        <label>Select Category</label><br/>
          <select  class="form-select"
          value={category} 
          onChange={handleChange("category")}
          style={{fontSize:"130%",marginBottom:"10px"}} 
          >
          <option selected>Select Category</option>
          <option value="Summer Wear">
            Summer Wear</option>
            <option value="Winter Wear">Winter Wear</option>
            <option value="Silk Clothes">Silk Clothes</option>
          </select>
          </div>

          {/* <label>Select Category</label>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Select Category
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Summer Wear
              </a>
              <a class="dropdown-item" href="#">
                Winter Wear
              </a>
              <a class="dropdown-item" href="#">
                Silk Clothes
              </a>
            </div>
          </div>
        </div> */}

        <div class="form-group">
          <label>Stock</label>
          <input
            type="number"
            class=" form-control"
            placeholder="Enter Stock"
            value={countInStock} onChange={handleChange("countInStock")}
          />
        </div>

        <div class="form-group">
          <label>Description</label>
          <textarea
            class=" form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={description} onChange={handleChange("description")}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
};

export default CreateProduct;
