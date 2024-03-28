import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
// add store here.
reducer: {
    cart: cartReducer,
}

});


export default appStore;