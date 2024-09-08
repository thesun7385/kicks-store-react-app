import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
import favSlice from "./fav-slice";


// Create a store
const store = configureStore({
    // Add the reducers
    reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer, fav: favSlice.reducer }
})

export default store;