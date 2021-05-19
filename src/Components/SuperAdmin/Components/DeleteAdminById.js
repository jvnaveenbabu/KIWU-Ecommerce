import React from "react";

const DeleteAdminById = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Delete Admin
      </h2>
      <h6 style={{ textAlign: "center"}}>It removes admiin access and delete the user account</h6>
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
          Delete Admin
        </button>
      </form>
    </>
  );
};

export default DeleteAdminById;
