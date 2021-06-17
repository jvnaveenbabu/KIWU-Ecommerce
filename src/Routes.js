import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateProduct from "./Components/Admin/Components/CreateProduct";
import ManageProduct from "./Components/Admin/Components/ManageProduct";
import UpdateProduct from "./Components/Admin/Components/UpdateProduct";
import AdminPage from "./Components/Admin/Screens/AdminPage";
import AuthPage from "./Components/Auth/Screens/AuthPage";
import HomePage from "./Components/Home/Screens/HomePage";
import SuperAdminRoutes from "./Components/SuperAdmin/Routes/SuperAdminRoutes";
import SuperAdminPage from "./Components/SuperAdmin/Screens/SuperAdminPage";
import Footer from "./Components/Navbar&Footer/Components/Footer";

const Routes=()=>{
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/admin" exact><AdminPage /><Footer /></Route>
          <Route path="/superadmin" exact><SuperAdminPage /><Footer /></Route>
          <Route path="/admin/create/product" exact><CreateProduct /><Footer /></Route>
          <Route path="/admin/manage/product" exact><ManageProduct /><Footer /></Route>
          <Route path="/admin/edit/product/:id" exact><UpdateProduct /><Footer /></Route>
          <SuperAdminRoutes/>
          <Route path="/auth" exact><AuthPage /></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
