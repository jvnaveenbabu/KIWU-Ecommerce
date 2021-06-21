import { configureStore } from "@reduxjs/toolkit"
import adminReducer from "../Components/Admin/adminSlice"
import superAdminReducer from "../Components/Admin/adminSlice"
import authReducer from "../Components/Auth/authSlice"

export const store = configureStore({
  reducer: {
    adminProduct:adminReducer,
    superadmin:superAdminReducer,
    auth:authReducer
  }

  //utils store
})
