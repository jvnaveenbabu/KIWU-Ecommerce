import "./App.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Routes";
import Footer from "./Components/Navbar&Footer/Components/Footer";
import NavMenu from "./Components/Navbar&Footer/Components/NavMenu";
import NavBar from "./Components/Navbar&Footer/Components/NavBar";

function App() {
  return (
    <>
      <NavMenu/>
      <ToastContainer />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
