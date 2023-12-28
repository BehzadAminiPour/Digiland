/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
// import {toast} from 'react-toastify';

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
    },
    clearCart: (state, action) => {},
    removeItem: (state, action) => {},
    editItem: (state, action) => {},
  },
});

export const {addItem,clearCart,editItem,removeItem} = cartSlice.actions;
export default cartSlice.reducer;
