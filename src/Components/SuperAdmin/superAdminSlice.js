import { createSlice } from "@reduxjs/toolkit"
import { GetPendingProducts } from "./superAdminThunks"

const superAdminSlice = createSlice({
  name: "superAdmin",
  initialState: {
    pendingProducts:null,
    pendingProducts_loading:false,
    pendingProducts_error:""
  },
  extraReducers: {
    
    [GetPendingProducts.pending]: (state, _) => {
      state.pendingProducts_loading = true
    },
    [GetPendingProducts.fulfilled]: (state, { payload }) => {
      console.log("payload",payload,state)
      state.pendingProducts = payload
      state.pendingProducts_loading = false
    },
    [GetPendingProducts.rejected]: (state, {error}) => {
      state.pendingProducts_error = error
      state.pendingProducts_loading = false
    },
    
  }
})

export default superAdminSlice.reducer
