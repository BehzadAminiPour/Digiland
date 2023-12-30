/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;

      const item = state.cartItems.find((i) => i.id === product.id);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }

      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("آیتم با موفقیت به سبد اضافه شد");
    },
    clearCart: (state, action) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
    
      const items = state.cartItems.find((i) => i.id === id);
      state.cartItems = state.cartItems.filter((i) => i.id !== id);
      state.numItemsInCart -= items.amount;
      state.cartTotal -= items.price * items.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error("محصول از سبد شما حذف شد");
    },
    editItem: (state, action) => {
      const {
        id, amount 
      } = action.payload;
      const item = state.cartItems.find((i) => i.id === id);
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("سبد خرید شما به روز شد");
    },
    calculateTotals: (state) => {
      state.orderTotal = state.cartTotal;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, editItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
