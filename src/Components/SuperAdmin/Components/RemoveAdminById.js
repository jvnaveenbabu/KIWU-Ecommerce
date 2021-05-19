import React from "react";

const RemoveAdminById = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Update Admin
      </h2>
      <form class="form-main" style={{ border: "10px solid #ff66ff" }}>
        <div class="form-group">
          <label>User Id</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Id"
          />
        </div>

        <button type="submit" class="btn btn-primary" style={{marginTop:"15px"}}>
        Remove Admin Access
        </button>
      </form>
    </>
  );
};

export default RemoveAdminById;
