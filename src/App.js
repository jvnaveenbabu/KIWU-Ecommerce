import "./App.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Routes";
import Footer from "./Components/Navbar&Footer/Components/Footer";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
