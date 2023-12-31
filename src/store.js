import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userSlice,
  },
});
