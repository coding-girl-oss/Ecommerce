import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart : [],
  
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      // Find if the product already exists in the cart
      const product = state.find(item => item.id === action.payload.id);
  
      if (product) {
          // If the product exists, increase the quantity
          product.quantity += 1;
      } else {
          // If the product doesn't exist, add it with a quantity of 1
          state.push({ ...action.payload, quantity: 1 });
      }
  },
  
    remove: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    clear: () => {
      return [];
    },
    increment: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      product.quantity += 1;
       },
    decrement: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        console.log(
          "Product not found for decrement action or quantity too low"
        );
      }
    },
  },
});

export const { add, remove, clear, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
