import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Popover, OverlayTrigger } from "react-bootstrap";
import "./Search.css";

const Search = () => {
  const [img, setImg] = useState("");
  const inputSearch = (e) => {
    const data = e.target.value;
    setImg(e.target.value);
    // console.log(data);
  };

  return (
    <>
      {["bottom"].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          className="search-box"
          overlay={
            <Popover id={`popover-positioned-${placement}`} className="Popover">
              <Popover.Content className="popover-content">
                <input
                  placeholder="Search Products"
                  type="text"
                  value={img}
                  onChange={inputSearch}
                />
              </Popover.Content>
            </Popover>
          }
        >
          <i className="fas fa-search"></i>
        </OverlayTrigger>
      ))}
    </>
  );
};

export default Search;
