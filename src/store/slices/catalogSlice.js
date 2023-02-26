import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { loading: "start", items: [] };

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalog",
  async () => {
    let catalog = fetch("catalog.json").then((r) => r.json());
    return catalog;
  }
);

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCatalog.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.items.length = 0;
      state.items.push(...action.payload);
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
// export const { setCatalog } = catalogSlice.actions;

export default catalogSlice.reducer;
