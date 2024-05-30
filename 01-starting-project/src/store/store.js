import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./updateCart";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});

export const cartActions = cartSlice.actions;
export default store;