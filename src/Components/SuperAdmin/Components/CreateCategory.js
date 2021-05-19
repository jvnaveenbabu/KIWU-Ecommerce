import React from "react";

const CreateCategory = () => {
  return (
    <>
    
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Add Category
      </h2>
      <form class="form-main" style={{ border: "10px solid #ff66ff" }}>
        <div class="form-group">
          <label>Category Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Category Name"
          />
        </div>

        <button type="submit" class="btn btn-primary" style={{marginTop:"15px"}}>
          Add Category
        </button>
      </form>
    </>
  );
};

export default CreateCategory;
