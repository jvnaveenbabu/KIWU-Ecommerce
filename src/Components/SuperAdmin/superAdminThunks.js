import axios from "../../utils/axiosHelper"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const GetPendingProducts = createAsyncThunk(
  "superadmin/GetPendingProducts",
  async () =>
    (
      await axios.get(
        "/products/pending"
      )
    ).data
)

