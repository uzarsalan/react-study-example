import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import catalogSlice from "./slices/catalogSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    catalog: catalogSlice,
  },
});
