import "./App.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Routes";

import NavMenu from "./Components/Navbar&Footer/Components/NavMenu";
import NavBar from "./Components/Navbar&Footer/Components/NavBar";
import { store } from "./utils/store"
import { Provider } from "react-redux"
import AuthPage from "./Components/Auth/Screens/AuthPage";

function App() {
  return (
    <>
    <Provider store={store}>
      {/* <NavMenu/> */}
      <ToastContainer />
      <Routes />
      </Provider>
    </>
  );
}

export default App;
