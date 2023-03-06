import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { loading: "start", items: [], categoryName: null };

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalog",
  async () => {
    return axios
      .get("http://localhost:1337/api/foods?populate=category,image")
      .then((r) => r.data);
  }
);

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setCategoryName: (state, action) => {
      state.categoryName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCatalog.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.items.length = 0;
      state.items.push(...action.payload.data);
    });
    builder.addCase(fetchCatalog.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchCatalog.rejected, (state, action) => {
      state.loading = "rejected";
    });
  },
});

// Action creators are generated for each case reducer function
export const { setCategoryName } = catalogSlice.actions;

export default catalogSlice.reducer;
