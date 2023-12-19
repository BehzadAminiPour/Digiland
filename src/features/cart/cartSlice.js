import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from 'axios'
import supabase from "../../services/supabase";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const fetchItems = createAsyncThunk(
  "cart/fetchItems",
  async function () {
    let { data, error } = await supabase.from("Products").select("*");
    if (error) {
      console.log(error);
      throw new Error("Products could not be loaded");
    }
    return data;
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.amount = state.amount + 1;
      // console.log(payload);
      state.cartItems = state.cartItems.filter((item) => item.id === payload);
    
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
// console.log(cartSlice);
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
