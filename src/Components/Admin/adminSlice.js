import { createSlice } from "@reduxjs/toolkit"
import { AddProduct, GetProducts,EditProduct } from "./adminThunks"

const adminSlice = createSlice({
  name: "adminProduct",
  initialState: {
    product: null,
    addproduct_loading: false,
    addproduct_error: "",
    getProducts: null,
    getProducts_loading: false,
    getProducts_error: "",
    editProduct_loading:false,
    editProduct_error:""
  },
  extraReducers: {
    // REGISTER
    [AddProduct.pending]: (state, _) => {
      state.addproduct_loading = true
    },
    [AddProduct.fulfilled]: (state, { payload }) => {
      console.log("payload",payload,state)
      state.product = payload
      state.addproduct_loading = false
    },
    [AddProduct.rejected]: (state, {error}) => {
      console.log("payload",error)

      state.addproduct_error = error
      state.addproduct_loading = false
    },

    [GetProducts.pending]: (state, _) => {
      state.getProducts_loading = true
    },
    [GetProducts.fulfilled]: (state, { payload }) => {
      state.getProducts = payload
      state.getProducts_loading = false
      console.log("payload",payload,state)
    },
    [GetProducts.rejected]: (state, {error}) => {
      state.getProducts_error = error
      state.getProducts_loading = false
    
    },

    [EditProduct.pending]: (state, _) => {
      state.editProduct_loading = true
    },
    [EditProduct.fulfilled]: (state, { payload }) => {
      state.editProduct_loading = false
      console.log("payload",payload,state)
    },
    [EditProduct.rejected]: (state, {error}) => {
      state.editProduct_error = error
      state.editProduct_loading = false
    
    }

    
  }
})

export default adminSlice.reducer
