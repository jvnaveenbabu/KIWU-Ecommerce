import { configureStore } from "@reduxjs/toolkit"
import adminReducer from "../Components/Admin/adminSlice"
import superAdminReducer from "../Components/Admin/adminSlice"

export const store = configureStore({
  reducer: {
    adminProduct:adminReducer,
    superadmin:superAdminReducer
  }
})
