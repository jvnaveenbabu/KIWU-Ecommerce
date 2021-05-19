import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateCategory from "../Components/CreateCategory";
import DeleteAdminById from "../Components/DeleteAdminById";
import MakeAdminByEmail from "../Components/MakeAdmin";
import ManageCategory from "../Components/ManageCategory";
import PendingProducts from "../Components/PendingProducts";
import RemoveAdminByEmail from "../Components/RemoveAdmin";
import RemoveAdminById from "../Components/RemoveAdminById";
import UpdateAdminById from "../Components/UpdateAdminById";
import SuperAdminPage from "../Screens/SuperAdminPage";

const SuperAdminRoutes=()=>{
  return (
    <>
          <Route path="/superadmin/create/category" exact><CreateCategory /></Route>
          <Route path="/superadmin/manage/category" exact><ManageCategory /></Route>
          <Route path="/superadmin/products/pending" exact><PendingProducts /></Route>
          <Route path="/superadmin/products/pendingbyid" exact><SuperAdminPage /></Route>
          <Route path="/superadmin/make/admin" exact><MakeAdminByEmail /></Route>
          <Route path="/superadmin/remove/admin" exact><RemoveAdminByEmail /></Route>
          <Route path="/superadmin/update/adminbyid" exact><UpdateAdminById /></Route>
          <Route path="/superadmin/remove/adminbyid" exact><RemoveAdminById /></Route>
          <Route path="/superadmin/delete/adminbyid" exact><DeleteAdminById /></Route>
    </>
  );
}

export default SuperAdminRoutes;
