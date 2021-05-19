import React from "react";

const PendingProductById = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Pending Products By Id
      </h2>
      <form class="form-main" style={{ border: "10px solid #ff66ff" }}>
        <div class="form-group">
          <label>Product Id</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Id"
          />
        </div>

        <button type="submit" class="btn btn-primary" style={{marginTop:"15px"}}>
          Get Product
        </button>
      </form>
    </>
  );
};

export default PendingProductById;
