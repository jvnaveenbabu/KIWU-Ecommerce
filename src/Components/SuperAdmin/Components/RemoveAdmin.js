import React from "react";

const RemoveAdminByEmail = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Remove Admin
      </h2>
      <form class="form-main" style={{ border: "10px solid #ff66ff" }}>
        <div class="form-group">
          <label>Email Adress of user</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Email"
          />
        </div>

        <button type="submit" class="btn btn-primary" style={{marginTop:"15px"}}>
          Remove Admin Access
        </button>
      </form>
    </>
  );
};

export default RemoveAdminByEmail;
