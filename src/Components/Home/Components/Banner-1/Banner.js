import React from "react";

const Banner = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4 col-12">
          <img
            src="https://source.unsplash.com/user/erondu/300x430"
            alt="founder"
          />
        </div>
        <div className="col-lg-4 col-12">
          <h2>Title</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        <div className="col-lg-4 col-12">
          <div className="row mb-2">
            <div className="col-6">
              <img
                src="https://source.unsplash.com/user/erondu/140x140"
                alt="brand"
              />
            </div>
            <div className="col-6">
              <img
                src="https://source.unsplash.com/user/erondu/140x140"
                alt="brand"
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-6">
              <img
                src="https://source.unsplash.com/user/erondu/140x140"
                alt="brand"
              />
            </div>
            <div className="col-6">
              <img
                src="https://source.unsplash.com/user/erondu/140x140"
                alt="brand"
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-6">
              <img
                src="https://source.unsplash.com/user/erondu/140x140"
                alt="brand"
              />
            </div>
            <div className="col-6">
              <img
                src="https://source.unsplash.com/user/erondu/140x140"
                alt="brand"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
