import axios from "../../utils/axiosHelper"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const AddProduct = createAsyncThunk(
  "adminProduct/AddProduct",
  async ({ name, description, image,designer,category,price,countInStock }) =>
    (
      await axios.post(
        "/products/",
        { name, description, image,designer,category,price,countInStock },
        { withCredentials: true }
      )
    ).data
)

export const GetProducts = createAsyncThunk(
  "adminProduct/GetProducts",
  async () =>
    (
      await axios.get(
        "/products"
      )
    ).data
)

export const EditProduct = createAsyncThunk(
  "adminProduct/EditProduct",
  async ({ id,name, description, image,brand,category,price,countInStock }) =>
    (
      await axios.put(
        `/products/${id}`,
        { id,name, description, image,brand,category,price,countInStock }
      )
    ).data
)



// export const GetAdminProducts = createAsyncThunk(
//   "adminProduct/GetAdminProducts",
//   async () =>
//     (
//       await axios.get(
//         "/products?admin=${}"
//       )
//     ).data
// )
