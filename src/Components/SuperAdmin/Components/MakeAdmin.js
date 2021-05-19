import React from "react";

const MakeAdminByEmail = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Make Admin
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
          Make Admin
        </button>
      </form>
    </>
  );
};

export default MakeAdminByEmail;
