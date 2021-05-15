import React from "react";
import NavBar from "../../Navbar&Footer/Screens/NavPage";
import Scroller from "../Components/Carsouel/Scroller";
import Banner1 from "../Components/Banner-1/Banner";
import Category1 from "../Components/Categories/Category1/Category1";
import Category2 from "../Components/Categories/Category2/Category2";
import Category3 from "../Components/Categories/Category3/Category3";
import Category4 from "../Components/Categories/Category4/Category4";
import Category5 from "../Components/Categories/Category5/Category5";
import Category6 from "../Components/Categories/Category6/Category6";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Scroller />
      <Banner1 />
      <Category1 />
      <Category2 />
      <Category3 />
      <Category4 />
      <Category5 />
      <Category6 />
    </div>
  );
};

export default HomePage;
