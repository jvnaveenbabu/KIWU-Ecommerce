import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateProduct from "./Components/Admin/Components/CreateProduct";
import ManageProduct from "./Components/Admin/Components/ManageProduct";
import AdminPage from "./Components/Admin/Screens/AdminPage";
import HomePage from "./Components/Home/Screens/HomePage";

const Routes=()=>{
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/admin" exact><AdminPage /></Route>
          <Route path="/admin/create/product" exact><CreateProduct /></Route>
          <Route path="/admin/manage/product" exact><ManageProduct /></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
