import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { createStatus: "default", orders: [] };

export const postOrder = createAsyncThunk(
  "orders/postOrder",
  async (orderData) => {
    return axios
      .post("http://localhost:1337/api/orders", { data: orderData })
      .then((r) => r.data)
      .catch((e) => console.log(e));
  }
);

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setCategoryName: (state, action) => {
      state.categoryName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postOrder.fulfilled, (state, action) => {
      state.createStatus = "fulfilled";
    });
    builder.addCase(postOrder.pending, (state, action) => {
      state.createStatus = "pending";
    });
    builder.addCase(postOrder.rejected, (state, action) => {
      state.createStatus = "rejected";
    });
  },
});

// Action creators are generated for each case reducer function
// export const { } = ordersSlice.actions;

export default ordersSlice.reducer;
