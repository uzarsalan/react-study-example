import { createSlice } from "@reduxjs/toolkit";

const initialState = { sum: 0, discount: 0, sumWithDisc: 0, items: [] };

function calcSum(state) {
  const sum = state.items.reduce((sum, item) => {
    sum += item.food.price * item.qty;
    return sum;
  }, 0);
  const sumWithDisc = calcSumWithDiscount(sum, state.discount);
  return { sum, sumWithDisc };
}

function calcSumWithDiscount(sum, discount) {
  return sum * (1 - discount / 100);
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let itemToAdd = action.payload;
      let index = state.items.findIndex(
        (item) => item.food.name === itemToAdd.name
      );
      if (index >= 0) {
        state.items[index].qty++;
      } else {
        state.items.push({ qty: 1, food: itemToAdd });
      }
      const { sum, sumWithDisc } = calcSum(state);
      state.sum = sum;
      state.sumWithDisc = sumWithDisc;
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.sum = 0;
      state.sumWithDisc = 0;
    },
    increaseItemQty: (state, action) => {
      let index = state.items.findIndex(
        (item) => item.food.name === action.payload
      );
      state.items[index].qty++;

      const { sum, sumWithDisc } = calcSum(state);
      state.sum = sum;
      state.sumWithDisc = sumWithDisc;
    },
    decreaseItemQty: (state, action) => {
      let index = state.items.findIndex(
        (item) => item.food.name === action.payload
      );
      state.items[index].qty--;
      if (!state.items[index].qty) state.items.splice(index, 1);

      const { sum, sumWithDisc } = calcSum(state);
      state.sum = sum;
      state.sumWithDisc = sumWithDisc;
    },
    applyDiscount: (state, action) => {
      state.discount = action.payload;
      state.sumWithDisc = calcSumWithDiscount(state.sum, action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  clearCart,
  increaseItemQty,
  decreaseItemQty,
  applyDiscount,
} = cartSlice.actions;

export default cartSlice.reducer;
