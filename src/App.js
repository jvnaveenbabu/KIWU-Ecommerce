import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from "./Routes";
import Footer from "./Components/Navbar&Footer/Components/Footer";

function App() {
  return (
    <>
      <ToastContainer/>
      <Routes/>
      <Footer/>
    </>
  );
}

export default App;
