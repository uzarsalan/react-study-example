import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let itemToAdd = action.payload;
      let index = state.findIndex((item) => item.food.name === itemToAdd.name);
      if (index >= 0) {
        state[index].qty++;
      } else {
        state.push({ qty: 1, food: itemToAdd });
      }
    },
    clearCart: (state) => {
      state.length = 0;
    },
    increaseItemQty: (state, action) => {
      let index = state.findIndex((item) => item.food.name === action.payload);
      state[index].qty++;
    },
    decreaseItemQty: (state, action) => {
      let index = state.findIndex((item) => item.food.name === action.payload);
      state[index].qty--;
      if (!state[index].qty) state.splice(index, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, clearCart, increaseItemQty, decreaseItemQty } =
  cartSlice.actions;

export default cartSlice.reducer;
