import "./App.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Routes";
import Footer from "./Components/Navbar&Footer/Components/Footer";
import NavMenu from "./Components/Navbar&Footer/Components/NavMenu";
import NavBar from "./Components/Navbar&Footer/Components/NavBar";
import { store } from "./utils/store"
import { Provider } from "react-redux"

function App() {
  return (
    <>
    <Provider store={store}>
      <NavMenu/>
      <ToastContainer />
      <Routes />
      <Footer />
      </Provider>
    </>
  );
}

export default App;
